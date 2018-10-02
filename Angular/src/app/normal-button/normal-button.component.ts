import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.css']
})
export class NormalButtonComponent implements OnInit {
  @Input() Texto: string;
  @Input() Color: string;
  @Input() isValid: string;
  @Output() ShowClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  callParent() {
    this.ShowClick.next('Clicked');
  }

}
