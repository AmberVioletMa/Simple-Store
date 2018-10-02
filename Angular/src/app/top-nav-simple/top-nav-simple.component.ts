import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Transacciones } from '../Transacciones.Service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';



@Component({
  selector: 'app-top-nav-simple',
  templateUrl: './top-nav-simple.component.html',
  styleUrls: ['./top-nav-simple.component.css']
})
export class TopNavSimpleComponent implements OnInit {
  @Output() public CategoriaS: Array<string> = [];
  constructor(private router: ActivatedRoute,public Tra: Transacciones) { }

  ngOnInit() {
    if(this.Tra.productosSubject){
      this.Tra.productosSubject.subscribe(productos => {
        for(var product in productos){
          this.CategoriaS.push(productos[product].Cat);
        }

        this.CategoriaS = Array.from(new Set(this.CategoriaS));
      });
    }
  }


}
