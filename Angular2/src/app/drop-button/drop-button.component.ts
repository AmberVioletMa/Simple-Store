import { Component, OnInit, Input } from '@angular/core';
import { Transacciones } from '../Transacciones.Service';

@Component({
  selector: 'app-drop-button',
  templateUrl: './drop-button.component.html',
  styleUrls: ['./drop-button.component.css']
})
export class DropButtonComponent implements OnInit {
  @Input() Titulo: string;
  @Input() Labels: Array<string>;
  @Input() Color: string;
  @Input() ServiceLabel;
  constructor(public Tra: Transacciones) { }

  Categorias = [];

  ngOnInit() {
    // tslint:disable-next-line:forin
    for (const label in this.Labels) {
      this.Categorias.push(
        {
          Class: this.Labels[label].trim(), Label: this.Labels[label]
        });
    }
  }

  changeLabel(NewLabel, ServiceLabel) {
     this.Tra[ServiceLabel] = NewLabel;
  }

}
