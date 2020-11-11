import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { MenuService } from '../menu.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-customise-menu-item',
  templateUrl: './customise-menu-item.component.html',
  styleUrls: ['./customise-menu-item.component.less']
})
export class CustomiseMenuItemComponent implements OnInit {

  public pizza: Pizza;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private menuService: MenuService, private cartService: CartService) {
  }

  ngOnInit(): void {
    const id: number = parseInt(this.activatedRoute.snapshot.params['id'], 10);

    this.pizza = this.menuService.getPizzaByID(id);

    console.log('customise menu item ' + id + ' pizza ' + this.pizza);
  }

  addItem() {
    console.log('add customised Pizza item ' + this.pizza);
    this.cartService.addItem(this.pizza);
    this.router.navigateByUrl('/cart');
  }


}
