import { Component, OnInit, Input } from '@angular/core';
import { Transacciones } from '../Transacciones.Service';



@Component({
  selector: 'app-bottom-nav-simple',
  templateUrl: './bottom-nav-simple.component.html',
  styleUrls: ['./bottom-nav-simple.component.css']
})
export class BottomNavSimpleComponent implements OnInit {

@Input() TotalAPagar: number;
  constructor(private Tra:Transacciones) {

   }

  ngOnInit() {


  }
private openModal(){
document.getElementById('myModal').style.display = "block";}
}
