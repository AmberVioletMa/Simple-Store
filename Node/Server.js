var express= require('express');
var app= express();
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
const https = require('https');
//permitir CROS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Metods", "*");
  next();
});

let Productos=[];

const ModeloProducto = {
	'ID': 'string',
	'dolar': 'number',
	'imagenU': 'string',
	'Cat':'string',
	'Disp': 'number'
};

const ModeloRespuesta ={
	'nombre':'string',
	'apellido':'string',
	'direccion':'string',
	'email':'string',
	'CP':'number',
	'FormaDePago':'string',
	'Productos':'object',
	'TipoDePago':'string'
};

const ModeloRespuestaProducto ={
	'_id':'string',
	'Cat':'string',
	'dolar':'number',
	'imagenU':"string",
	'ID':'string',
	'Disp':'number',
	'pesos':'number',
	'Cantidad':'number'
};

MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, function (err, client) {
  	if (err) throw err;

  	var db = client.db('InventarioDeProductos');

  	db.collection('Productos').find().toArray( function (findErr, result) {
    	if (findErr) throw findErr;
    	Productos= result;
    	client.close();
  	});
}); 

app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var esRate = 1;
const exUrl='https://free.currencyconverterapi.com/api/v5/convert?q=USD_MXN&compact=y';
https.get(exUrl, (res) => {
	let data = '';
 
  // A chunk of data has been recieved.
  res.on('data', (chunk) => {
    data += chunk;
  });

	res.on('end', () => {
		esRate=JSON.parse(data).USD_MXN.val;
	});
});


app.post('/Productos', function(request, response){
	const json = request.body;
	let validObj = Object.keys(ModeloRespuesta).every((key)=> {
		return json.hasOwnProperty(key) && typeof(json[key]) === ModeloRespuesta[key];
	});

	for(producto of json.Productos){
		validSubObj = Object.keys(ModeloRespuestaProducto).every((key)=> {
			console.log(key, producto.hasOwnProperty(key), typeof(producto[key]), ModeloRespuestaProducto[key]);
			return producto.hasOwnProperty(key) && typeof(producto[key]) === ModeloRespuestaProducto[key];
		});
	}

	if(validObj && validSubObj) {
		MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }, function (err, client) {
  			if (err) throw err;
  			var db = client.db('InventarioDeProductos');
  			for(producto in json.Productos){
  				db.collection('Productos').updateOne({ID:json.Productos[producto].ID},{$inc:{Disp: - json.Productos[producto].Cantidad}}, function(err, res) {
    				if (err) throw err;
    				console.log(json.Productos[producto].ID);
  				});
  				db.collection('Productos').find().toArray( function (findErr, result) {
    				if (findErr) throw findErr;
    				Productos= result;
  				});
  			}
  			client.close();
  		}); 
		response.sendStatus(200);
	} else{
		response.writeHead(400,'Missing or Invalid Data ', {'content-type' : 'text/plain'});
		console.log(json);
	}
	response.end();
});


app.get('/Productos', function(request, response){
	Productos.forEach((producto) =>{producto.pesos= parseFloat((producto.dolar*esRate).toFixed(2));});
	response.json(Productos);
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});