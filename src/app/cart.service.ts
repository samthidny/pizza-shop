import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Subject, BehaviorSubject } from 'rxjs';
import { Topping } from './topping';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Pizza[];
  public numItems: number;
  public cartUpdated$: BehaviorSubject<Pizza[]>;
  public totalPrice: number;

  constructor(public menuService: MenuService) {
    this.items = [];
    this.numItems = 0;
    this.totalPrice = 0;
    this.cartUpdated$ = new BehaviorSubject<Pizza[]>(this.items);
  }

  addItem(pizza: Pizza): void {

    const pizzaInst: Pizza = pizza.clone();

    this.items.push(pizzaInst);

    pizzaInst.toppingsChanged.subscribe((pizza: Pizza) => {
      this.totalPrice = this.calculatePrice();
      this.cartUpdated$.next(this.items);
    });

    this.numItems++;
    this.totalPrice = this.calculatePrice();
    this.cartUpdated$.next(this.items);
  }

  removeItem(pizza: Pizza): void {
    const index = this.items.indexOf(pizza);
    this.items.splice(index, 1);
    this.numItems--;
    this.totalPrice = this.calculatePrice();
    this.cartUpdated$.next(this.items);
  }

  calculatePrice(): number {
    let totalPrice = 0;
    this.items.forEach((item: Pizza) => {
      totalPrice += this.getPrice(item);
    });
    return totalPrice;
  }

  getPrice(pizza: Pizza): number {
    let total = 0;
    pizza.toppings.forEach((topping: Topping) => {
      const toppingPrice: number = this.menuService.getToppingPrice(topping, pizza);
      total += toppingPrice;
    });
    return total;
  }

}
