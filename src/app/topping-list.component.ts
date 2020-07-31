import { Component, OnInit, Input } from '@angular/core';
import { Topping } from './topping';

@Component({
  selector: 'app-topping-list',
  templateUrl: './topping-list.component.html',
  styleUrls: ['./topping-list.component.less']
})
export class ToppingListComponent implements OnInit {

  constructor() { }

  @Input()
  toppings: Topping[];

  ngOnInit(): void {
  }

}
