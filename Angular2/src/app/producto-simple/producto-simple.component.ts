import { Component, OnInit, Input } from "@angular/core";
import { Transacciones } from "../Transacciones.Service";
import { Producto } from "./Interface.model";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: "app-producto-simple",
  templateUrl: "./producto-simple.component.html",
  styleUrls: ["./producto-simple.component.css"]
})
export class ProductoSimpleComponent implements OnInit {
  @Input() Product: Producto;
  public Categoria: string;

  constructor(
    private router: ActivatedRoute,
    public Tra: Transacciones) { }
  public my_Class = 'productClassSmall';
  ngOnInit() {
    this.router.params.subscribe(value => {
      this.Categoria = value['Cat'];
     // let buttonC = document.getElementsByClassName('buttonColor') as HTMLCollectionOf<HTMLElement>;
      //if (buttonC.length != 0) {
        //buttonC[0].style.backgroundColor= 'rgb(' + 255 + ',' + 0 + ',' + 0 + ')';
     // }
    });
  }



  private changeButtonColor(id) {
    if (this.Product.CBCx === 0) {
      this.Tra.ListaCompra.push(this.Product);
      this.Tra.changeTotalAPagar();
      this.Product.CBCx = 1;
    } else {
      this.Tra.ListaCompra = this.Tra.ListaCompra.filter(
        producto => producto.ID !== this.Product.ID
      );
      this.Tra.changeTotalAPagar();
      this.Product.CBCx = 0;
    }
  }
}
