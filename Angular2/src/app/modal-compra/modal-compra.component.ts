import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../producto-simple/Interface.model';
import { Transacciones } from '../Transacciones.Service';

@Component({
  selector: 'app-modal-compra',
  templateUrl: './modal-compra.component.html',
  styleUrls: ['./modal-compra.component.css']
})
export class ModalCompraComponent implements OnInit {
  @Input() Product: Producto;
  @Input() cantidad: number;
  listaProductos: Array<Producto>;
  constructor(public Tra: Transacciones) { }

  ngOnInit() {
    this.cantidad = 1;
}


  // When the user clicks on <span> (x), close the modal
private close(){
  document.getElementById('myModal').style.display = "none";
  }



}
