import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';
import { Pizza } from './pizza';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  pizzas: [Pizza];

  constructor(menuService: MenuService) {
    this.pizzas = menuService.pizzas;
  }

  ngOnInit(): void {
  }

}
