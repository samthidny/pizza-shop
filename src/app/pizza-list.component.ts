import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.less']
})
export class PizzaListComponent implements OnInit {

  constructor() { }

  @Input() pizzas: [Pizza];

  ngOnInit(): void {
  }

}
