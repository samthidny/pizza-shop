import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';
import { Router } from '@angular/router';
import { PizzaSize } from '../pizza-size';

@Component({
  selector: 'app-customise-cart-item',
  templateUrl: './customise-cart-item.component.html',
  styleUrls: ['./customise-cart-item.component.less']
})
export class CustomiseCartItemComponent implements OnInit {

  public pizza: Pizza;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    console.log('customise cart item page ' + id);
    this.pizza = this.cartService.getPizzaByID(id);
    if (!this.pizza) {
      console.log('No such pizza');
      this.pizza = Pizza.create('Item does not exist', [], new PizzaSize());
    }
    console.log('customise CART item ' + id + ' pizza ' + this.pizza);
  }

}
