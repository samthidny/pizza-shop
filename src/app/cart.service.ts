import { Injectable } from '@angular/core';
import { Pizza } from './pizza';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public items: Pizza[];
  public numItems: number;
  public cartUpdated$: Subject<number>;

  constructor() {
    this.items = [];
    this.numItems = 0;
    this.cartUpdated$ = new Subject<number>();
  }

  addItem(pizza: Pizza): void {
    this.items.push(pizza);
    this.numItems++;
    console.log('Pizza added to cart service');
    this.cartUpdated$.next();
  }
}
