import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  pizzas: [Pizza];

  constructor() {
    this.pizzas = [Pizza.create('Veggie Special')];
    this.pizzas.push(Pizza.create('Meat Special'));
    this.pizzas.push(Pizza.create('Spicy Nicey'));
  }

}
