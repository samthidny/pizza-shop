import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Pizza } from '../pizza';
import { Router } from '@angular/router';
import { PizzaSize } from '../pizza-size';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-customise-cart-item',
  templateUrl: './customise-cart-item.component.html',
  styleUrls: ['./customise-cart-item.component.less']
})
export class CustomiseCartItemComponent implements OnInit {

  public pizza: Pizza;
  private originalPizza: Pizza;
  public customisedCartPrice: number;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private menuService: MenuService, private router: Router) {
  }

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10);
    this.pizza = this.cartService.getPizzaByID(id);
    if (!this.pizza) {
      console.log('No such pizza');
      this.pizza = Pizza.create('Item does not exist', [], new PizzaSize());
    }

    // Clone pizza keep a reference to original so we can compare
    this.originalPizza = this.pizza;
    this.pizza = this.originalPizza.clone();
    this.pizza.toppingsChanged.subscribe(this.customPizzaChanged.bind(this));
  }

  customPizzaChanged(pizza: Pizza) {
    //const customisedPrice = this.menuService.getPrice(pizza);
    //pizza.price = customisedPrice;

    const originalPrice = this.menuService.getPrice(this.originalPizza);
    const customisedPrice = this.menuService.getPrice(this.pizza);
    this.originalPizza.price = originalPrice;
    pizza.price = customisedPrice;

    console.log('custom Pizza has been changed!!!!' + ' original price ' + originalPrice + ' new price: ' + customisedPrice);

  }

}
