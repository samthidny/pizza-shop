import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from './pizza';
import { MenuService } from './menu.service';
import { PizzaOption } from './pizza-option';

@Component({
  selector: 'app-pizza-option',
  templateUrl: './pizza-option.component.html',
  styleUrls: ['./pizza-option.component.less']
})
export class PizzaOptionComponent implements OnInit {

  private _pizza: Pizza;
  @Output() optionChange: EventEmitter<PizzaOption> = new EventEmitter<PizzaOption>();
  @Input() option: string;
  options: PizzaOption[];
  prices: number[];
  selectedOption: PizzaOption;

  @Input() set pizza(pizza: Pizza) {
    this._pizza = pizza;
    this._pizza.toppingsChanged.subscribe(() => {
      this.updateOptionPrices();
    });
  }

  get pizza(): Pizza {
    return this._pizza;
  }

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.updateOptionPrices();
  }

  updateOptionPrices(): void {
    const pizza = this._pizza.clone();
    this.options = this.menuService.getAvailableOptions(this.option, pizza);
    this.prices = this.options.map((option: PizzaOption) => {
      pizza[this.option] = option;
      return this.menuService.getPrice(pizza);
    });

    this.selectedOption = this.options.find((option: PizzaOption) => {
      return option === pizza[option.option];
    });
  }

  onOptionChange(pizzaOptionID: string): void {
    this.selectedOption = this.options.find((item: PizzaOption) => {
      return item.id === parseInt(pizzaOptionID, 10);
    });
    this.optionChange.emit(this.selectedOption);
  }

}
