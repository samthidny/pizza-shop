import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-customise-menu-item',
  templateUrl: './customise-menu-item.component.html',
  styleUrls: ['./customise-menu-item.component.less']
})
export class CustomiseMenuItemComponent implements OnInit {

  private pizza: Pizza;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    
    this.pizza = this.menuService.getPizzaByID(id);

    console.log('customise menu item ' + id + ' pizza ' + this.pizza);
  }

}
