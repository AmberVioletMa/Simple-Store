import { Component, OnInit, Injectable } from '@angular/core';
import { ProductService } from './panel-de-productos.service';
import { Transacciones } from '../Transacciones.Service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-panel-de-productos',
  templateUrl: './panel-de-productos.component.html',
  styleUrls: ['./panel-de-productos.component.css']
})
export class PanelDeProductosComponent implements OnInit {


  public Products = [];
  errorMessage = ' ';
  constructor(private _productService: ProductService,
  public Tra: Transacciones) {
  }

  ngOnInit() {
if (!this.Tra.Productos) {
  const request = this._productService.getProducts()
  .subscribe((products) => {
    this.Tra.Productos = products;
    // this.Products = products;
    this.Tra.productosSubject.next(products);
    console.log(products);
    request.unsubscribe();
  },
  (err) => {
    this.errorMessage = err;
  });
} else {
  this.Products = this.Tra.Productos;
}

  }

}
