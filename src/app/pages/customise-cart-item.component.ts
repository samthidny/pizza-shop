import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-customise-cart-item',
  templateUrl: './customise-cart-item.component.html',
  styleUrls: ['./customise-cart-item.component.less']
})
export class CustomiseCartItemComponent implements OnInit {

  private pizza: Pizza;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pizza = this.cartService.getPizzaByID(id);

    console.log('customise CART item ' + id + ' pizza ' + this.pizza);
  }

}
