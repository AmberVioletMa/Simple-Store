import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class Transacciones {
    // esta clase es para compartir informacion
    public TotalAPagar = 0;
    public ListaCompra = [];
    public Productos;
    public productosSubject = new Subject();
    DropButtonLabel = 'Recoger en tienda';
    DropButtonLabelPago = 'Pago en oxxo';

public changeTotalAPagar() {
  this.TotalAPagar = 0;
  for(var item in this.ListaCompra) {
    this.TotalAPagar += this.ListaCompra[item].pesos * this.ListaCompra[item].Cantidad;
  }
  this.TotalAPagar = parseFloat(this.TotalAPagar.toFixed(2));
}

}

