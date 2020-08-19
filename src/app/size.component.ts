import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from './pizza';
import { PizzaSize } from './pizza-size';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.less']
})
export class SizeComponent implements OnInit {

  @Input() pizza: Pizza;

  // @Output() sizeChanged: EventEmitter<>;

  sizes: Array<PizzaSize>;

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
    this.sizes = this.menuService.sizes;
  }

  changeSize(event: Event, size: PizzaSize): void {
    console.log('Change size of this pizza!!! ' + size.name);
    this.pizza.size = size;
  }

}
