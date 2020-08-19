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
    //pizzaInst.price = this.menuService.getPrice(pizzaInst);
    pizzaInst.toppingsChanged.subscribe(this.itemUpdated.bind(this));
    this.numItems++;
    this.totalPrice = this.getTotalPrice();
    this.cartUpdated$.next(this.items);
  }

  removeItem(pizza: Pizza): void {
    const index = this.items.indexOf(pizza);
    this.items.splice(index, 1);
    this.numItems--;
    this.totalPrice = this.getTotalPrice();
    this.cartUpdated$.next(this.items);
  }

  getTotalPrice(): number {
    let totalPrice = 0;

    this.items.forEach((item: Pizza) => {
      // update each pizza price
      item.price = this.menuService.getPrice(item);
      totalPrice += item.price;
    });
    return totalPrice;
  }

  // getPrice(pizza: Pizza): number {
  //   let total = this.menuService.getBasePrice(pizza);

  //   console.log('Calculate individual price ' + pizza.size.name);


  //   pizza.toppings.forEach((topping: Topping) => {
  //     const toppingPrice: number = this.menuService.getToppingPrice(pizza, topping);
  //     total += toppingPrice;
  //   });
  //   return total;
  // }

  itemUpdated(pizza: Pizza): void {
    console.log('Cart needs updating!!!!');
    this.totalPrice = this.getTotalPrice();
    console.log('New calculated price ' + this.totalPrice);
    this.cartUpdated$.next(this.items);
  }

}
