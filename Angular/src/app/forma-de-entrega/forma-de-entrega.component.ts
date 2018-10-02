import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transacciones } from '../Transacciones.Service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../panel-de-productos/panel-de-productos.service';

@Component({
  selector: 'app-forma-de-entrega',
  templateUrl: './forma-de-entrega.component.html',
  styleUrls: ['./forma-de-entrega.component.css']
})
export class FormaDeEntregaComponent implements OnInit {
  formDatos: FormGroup;
  errorMessage = ' ';
  @Output() closeModal: EventEmitter<string> = new EventEmitter();
  constructor( public Tra: Transacciones, private fb: FormBuilder, private ProdS: ProductService) { }

  ngOnInit() {
    this.formDatos = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      CP: [0, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      TC : ['', Validators.requiredTrue],
    });
  }

  get nameIsInvalid() {
    return this.formDatos.get('nombre').invalid && this.formDatos.get('nombre').touched;
  }

  get ApellidoIsInvalid() {
    return this.formDatos.get('apellido').invalid && this.formDatos.get('apellido').touched;
  }

  get EmailIsInvalid() {
    return this.formDatos.get('email').invalid && this.formDatos.get('email').touched;
  }

  get DirreccionlIsInvalid() {
    return this.formDatos.get('direccion').invalid && this.formDatos.get('direccion').touched;
  }

  get CPIsInvalid() {
    return this.formDatos.get('CP').invalid && this.formDatos.get('CP').touched;
  }

  get Complete() {
    if (this.Tra.DropButtonLabel === 'Entrega por correo') {
      return this.formDatos.valid;
    } else if (this.Tra.DropButtonLabel === 'Entrega a domicilio') {
      return this.formDatos.get('nombre').valid &&
      this.formDatos.get('apellido').valid &&
      this.formDatos.get('email').valid &&
      this.formDatos.get('direccion').valid &&
      this.formDatos.get('TC').valid;
    } else if (this.Tra.DropButtonLabel === 'Recoger en tienda') {
      return this.formDatos.get('nombre').valid &&
      this.formDatos.get('apellido').valid &&
      this.formDatos.get('email').valid &&
      this.formDatos.get('TC').valid;
    }
  }

  enviarForm($event) {
    let Formulariodeventas;
    Formulariodeventas = {...this.formDatos.value, FormaDePago: this.Tra.DropButtonLabel, Productos: this.Tra.ListaCompra};
    if (this.Tra.DropButtonLabel !== 'Entrega por correo') {
      Formulariodeventas.TipoDePago = 'Contra Entrega';
    }
    if (this.Tra.DropButtonLabel === 'Entrega por correo') {
      Formulariodeventas.TipoDePago = this.Tra.DropButtonLabelPago;
    }
    delete Formulariodeventas.TC;
    Formulariodeventas.Productos.forEach(element => {
      delete element.CBCx;
    });
    this.ProdS.postProducts(Formulariodeventas);
    alert(JSON.stringify(Formulariodeventas));
    // this.ProdS.getProducts().subscribe((products) => {
    //   this.Tra.Productos = products;
    //   this.Tra.ListaCompra = [];
    //   this.formDatos.reset();
    //   // this.Tra.productosSubject.next(products);
    //   this.closeModal.emit('Close');
    //   console.log(products);
    // },
    // (err) => {
    //   this.errorMessage = err;
    // });
  }

  resetForm() {
    this.formDatos.reset();
  }

}
