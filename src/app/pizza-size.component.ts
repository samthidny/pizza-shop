import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from './pizza';
import { MenuService } from './menu.service';
import { PizzaSize } from './pizza-size';

@Component({
  selector: 'app-pizza-size',
  templateUrl: './pizza-size.component.html',
  styleUrls: ['./pizza-size.component.less']
})
export class PizzaSizeComponent implements OnInit {

  @Input() pizza: Pizza;
  @Output() sizeChange: EventEmitter<PizzaSize> = new EventEmitter<PizzaSize>();
  sizes: PizzaSize[];
  selectedSize: PizzaSize;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.sizes = this.menuService.getAvailableSizes(this.pizza);
    this.selectedSize = this.menuService.defaultSize;
  }

  onSizeChange(pizzaSizeID: string): void {
    this.selectedSize = this.sizes.find((item: PizzaSize) => {
      return item.id === parseInt(pizzaSizeID, 10);
    });
    console.log('sizeChanged!!!! ' + this.selectedSize.name);
    this.sizeChange.emit(this.selectedSize);
  }

}
