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

  private _pizza: Pizza;
  @Output() sizeChange: EventEmitter<PizzaSize> = new EventEmitter<PizzaSize>();
  sizes: PizzaSize[];
  prices: number[];
  selectedSize: PizzaSize;

  @Input() set pizza(pizza: Pizza) {
    console.log('Pizza set!!!!');
    this._pizza = pizza;
    this._pizza.toppingsChanged.subscribe(() => {
      this.updateSizePrices();
    });
  }

  get pizza(): Pizza {
    return this._pizza;
  }

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.updateSizePrices();
    this.selectedSize = this.menuService.defaultSize;
  }

  updateSizePrices(): void {
    const pizza = this._pizza.clone();
    this.sizes = this.menuService.getAvailableSizes(pizza);
    this.prices = this.sizes.map((size: PizzaSize) => {
      pizza.size = size;
      return this.menuService.getPrice(pizza);
    });
  }

  onSizeChange(pizzaSizeID: string): void {
    this.selectedSize = this.sizes.find((item: PizzaSize) => {
      return item.id === parseInt(pizzaSizeID, 10);
    });
    console.log('sizeChanged!!!! ' + this.selectedSize.name);
    this.sizeChange.emit(this.selectedSize);
  }

}
