import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Pizza[];
  public numItems: number;
  public cartUpdated$: BehaviorSubject<number>;

  constructor() {
    this.items = [];
    this.numItems = 0;
    this.cartUpdated$ = new BehaviorSubject<number>(0);
    //this.addItem(Pizza.create('Test Pizza'));
  }

  addItem(pizza: Pizza): void {
    this.items.push(pizza);
    this.numItems++;
    console.log('Pizza added to cart service');
    this.cartUpdated$.next();
  }

  removeItem(pizza: Pizza): void {
    console.log('remove ' + pizza);
    const index = this.items.indexOf(pizza);
    this.items.splice(index, 1);
    this.numItems--;
    console.log('Pizza removed from cart service');
    this.cartUpdated$.next();
  }


}
