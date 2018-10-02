var express= require('express');
var app= express();
var fs = require('fs');
const https = require('https');
//permitir CROS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Metods", "*");
  next();
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

app.get('/file', function(request, response){
	console.log('debug');

	var file = fs.readFile('index.html', function(error, fileText) {
		response.writeHead(200, {'content-type': 'text/html'});
		response.write(fileText);
		response.end();
	});
});

app.get('/', function(request, response){
	console.log('debug');

	var file = fs.readFile('dist/index.html', function(error, fileText) {
		response.writeHead(200, {'content-type': 'text/html'});
		response.write(fileText);
		response.end();
	});
});

const ModeloProducto = {
	'ID': 'string',
	'pesos': 'number',
	'imagenU': 'string',
	'Cat':'string'
};

let Productos=[ 
//Aretes
    {Cat:"Aretes", dolar:2.00, imagenU:"https://cdn.crazy-factory.com/product_images/CJ-BE-P-01/CJ-BE-P-01BY_L-Jewelry-Earrings-Studs-Shields-Double-ball-ear-studs.JPG?dt=1454660315", ID:"NX61",Disp:10},
    {Cat:"Aretes", dolar:1.20, imagenU:"https://cdn.crazy-factory.com/product_images/XONR/XONR1072BK_L-Piercings-Nose-Jewelry-Septums-Glow-in-the-Dark-Open-Nose-Ring.JPG", ID:"NX62",Disp:5},
    {Cat:"Aretes", dolar:2.75, imagenU:"https://cdn.crazy-factory.com/product_images/CF-ER918/CF-ER918LS_L-Jewelry-Earrings-Studs-Shields-Earrings.JPG?dt=1461743744", ID:"NX63",Disp:3},
    {Cat:"Aretes", dolar:6.00, imagenU:"https://cdn.crazy-factory.com/product_images/CJ-ER02/CJ-ER02CR_L-Jewelry-Earrings-Studs-Shields-Ear-Studs.JPG", ID:"NX64",Disp:6},
    {Cat:"Aretes", dolar:3.25, imagenU:"https://cdn.crazy-factory.com/product_images/3S-EN5288RG/3S-EN5288RG_L-Jewelry-Earrings-Studs-Shields-Ear-Studs.JPG?dt=1449199753", ID:"NX65",Disp:2},
    {Cat:"Aretes", dolar:4.00, imagenU:"https://cdn.crazy-factory.com/product_images/BO-ER229/BO-ER229_L-Jewelry-Earrings-Studs-Shields-Ear-Studs.JPG", ID:"NX66",Disp:0},
//Collares
 {Cat:"Collar", dolar:40.5, imagenU:"http://www.cartier.mx/content/dam/rcq/car/13/61/35/9/1361359.png.scale.314.high.png", ID:"Trinity",Disp:2},
 {Cat:"Collar", dolar:30, imagenU:"http://www.cartier.mx/content/dam/rcq/car/13/61/41/4/1361414.png.scale.314.high.png", ID:"Trinity Ruban",Disp:5},
 {Cat:"Collar", dolar:24, imagenU:"http://www.cartier.mx/content/dam/rcq/car/13/61/60/4/1361604.png.scale.314.high.png", ID:"Agrafe",Disp:3},
 {Cat:"Zapatos", dolar:15, imagenU:"http://www.cartier.mx/content/dam/rcq/car/13/65/34/9/1365349.png.scale.314.high.png", ID:"Cartier",Disp:1},
 {Cat:"Collar", dolar:55, imagenU:"http://www.cartier.mx/content/dam/rcq/car/13/61/35/4/1361354.png.scale.314.high.png", ID:"Piedras De Color",Disp:0},
    
//Brazaletes

    ]



app.get('/Productos', function(request, response){
	Productos.forEach((producto) =>{producto.pesos= (producto.dolar*esRate).toFixed(2);});
	response.json(Productos);

});

app.delete('/Productos/:ID', function(request, response){
	const ID = request.params["ID"];
	const index = Productos.findIndex((item) => {
		return item.ID === ID;
	});
	if(proc){
Productos.splice(index, 1);
	response.sendStatus(200);}
	else{response.sendStatus(404);}
});

app.put('/Productos/:ID', function(request, response){
	const ID = request.params["ID"];
	const json = request.body;
		const validObj = Object.keys(ModeloProducto).every((key)=> {
		return json.hasOwnProperty(key) && typeof(json[key]) === ModeloProducto[key];
	});
	if(validObj) {
	const index = Productos.findIndex((item) => {
		return item.ID === ID;
	});

	if(index>=0){
    Productos.splice(index, 1,json );
	response.sendStatus(200);}
	else{response.sendStatus(404);}}
	else{response.writeHead(400,'Missing or Invalid Data ', {'content-type' : 'text/plain'});
response.end();
}

});

app.post('/Productos', function(request, response){
	const json = request.body;
	const validObj = Object.keys(ModeloProducto).every((key)=> {
		return json.hasOwnProperty(key) && typeof(json[key]) === ModeloProducto[key];
	});
	if(validObj) {
Productos.push(json);
	response.sendStatus(200);
	}else{response.writeHead(400,'Missing or Invalid Data ', {'content-type' : 'text/plain'});
response.end();
}
    
});

app.get('/Productos/:ID', function(request, response){
	const ID = request.params["ID"];
	const proc = Productos.find((item) => {
		return item.ID === ID;
	});
	proc.pesos= (proc.dolar*esRate).toFixed(2);
	if(proc){
	response.json(proc);}
	else{response.sendStatus(404);}
});

app.get('/HW', function(request, response){
	response.send('hello world');
});

app.listen(3000, function(){
	console.log('Listening on port 3000');
});