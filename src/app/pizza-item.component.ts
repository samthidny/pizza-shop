import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.less']
})
export class PizzaItemComponent implements OnInit {

  @Input() pizza: Pizza;

  constructor() { }

  ngOnInit(): void {
  }

}
