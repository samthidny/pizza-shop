import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.less']
})
export class PizzaListComponent implements OnInit {

  @Input() pizzas: [Pizza];
  
  @Output() onAddItem = new EventEmitter<Pizza>();

  constructor() { }


  ngOnInit(): void {
  }

  addItem(pizza: Pizza) {
    console.log('Pizza List addItem ' + event);
    this.onAddItem.emit(pizza);
  }

}
