import { Component, OnInit, Input } from '@angular/core';
import { Transacciones } from '../Transacciones.Service';

@Component({
  selector: 'app-rows-button',
  templateUrl: './rows-button.component.html',
  styleUrls: ['./rows-button.component.css']
})
export class RowsButtonComponent implements OnInit {
  @Input() Color: string;
  @Input() index: string;
  constructor(public Tra: Transacciones) { }

  ngOnInit() {
  }

  suma(){
    if(this.Tra.ListaCompra[this.index].Cantidad < this.Tra.ListaCompra[this.index].Disp){
      this.Tra.ListaCompra[this.index].Cantidad += 1;
      this.Tra.changeTotalAPagar();
    }
  }
  resta(){
    if(this.Tra.ListaCompra[this.index].Cantidad > 1){
      this.Tra.ListaCompra[this.index].Cantidad -= 1;
      this.Tra.changeTotalAPagar();
    }
  }

}
