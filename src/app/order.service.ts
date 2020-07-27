import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  items: [Pizza];

  constructor() { }

  addItem(pizza: Pizza): void {
    this.items.push(pizza);
  }

}
