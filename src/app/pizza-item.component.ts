import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from './pizza';
import { PizzaSize } from './pizza-size';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.less']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;

  @Output() onAddItem = new EventEmitter<Pizza>();
  @Output() onCustomiseItem = new EventEmitter<Pizza>();

  addItem() {
    this.onAddItem.emit(this.pizza);
  }

  constructor() { }

  ngOnInit(): void {
  }

  sizeChanged(size: PizzaSize): void {
    this.pizza.size = size;
  }

  customiseItem(pizza: Pizza) {
    console.log('Pizza Item - customise Menu Item');
    this.onCustomiseItem.emit(this.pizza);
  }
}
