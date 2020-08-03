import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.less']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;

  @Output() onAddItem = new EventEmitter<Pizza>();

  addItem() {
    this.onAddItem.emit(this.pizza);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
