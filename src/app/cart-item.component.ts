import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from './pizza';
import { PizzaSize } from './pizza-size';
import { PizzaOption } from './pizza-option';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {

  @Input() pizza: Pizza;
  @Input() index: number;

  @Output() itemRemoved: EventEmitter<Pizza>;

  constructor() {
    this.itemRemoved = new EventEmitter<Pizza>();
  }

  ngOnInit(): void {
  }

  removeItem() {
    this.itemRemoved.emit(this.pizza);
  }

  sizeChanged(size: PizzaSize): void {
    console.log('Cart Item heard size changed');
    this.pizza.size = size;
  }

  optionChanged(option: PizzaOption): void {
    console.log('Cart Item heard option changed');
    this.pizza[option.option] = option;
  }

}
