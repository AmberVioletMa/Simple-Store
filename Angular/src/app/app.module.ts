import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductoSimpleComponent } from './producto-simple/producto-simple.component';
import { PanelDeProductosComponent } from './panel-de-productos/panel-de-productos.component';
import { TopNavSimpleComponent } from './top-nav-simple/top-nav-simple.component';
import { BottomNavSimpleComponent } from './bottom-nav-simple/bottom-nav-simple.component';
import { Transacciones } from './Transacciones.Service';
import { ModalCompraComponent } from './modal-compra/modal-compra.component';
import { DropButtonComponent } from './drop-button/drop-button.component';
import { RowsButtonComponent } from './rows-button/rows-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './panel-de-productos/panel-de-productos.service';
import { RouterModule } from '@angular/router';
import { PanelDeInformacionComponent } from './panel-de-informacion/panel-de-informacion.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { NormalButtonComponent } from './normal-button/normal-button.component';
import { FormaDeEntregaComponent } from './forma-de-entrega/forma-de-entrega.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductoSimpleComponent,
    PanelDeProductosComponent,
    TopNavSimpleComponent,
    BottomNavSimpleComponent,
    ModalCompraComponent,
    DropButtonComponent,
    RowsButtonComponent,
    PanelDeInformacionComponent,
    RouterLinkComponent,
    NormalButtonComponent,
    FormaDeEntregaComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forRoot([
      { path: 'Productos', component: PanelDeProductosComponent},
      { path: 'Productos/:Cat', component: PanelDeProductosComponent},
      { path: 'Informacion', component: PanelDeInformacionComponent},
      { path: '', redirectTo: 'Productos', pathMatch: 'full'}, // si esta vacio
      { path: '**', redirectTo: 'Productos', pathMatch: 'full'} // si la liga no existe
    ]),
  ],
  providers: [Transacciones, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
