import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from './pizza';

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

}
