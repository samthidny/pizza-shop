import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DealsComponent } from './deals.component';
import { MenuComponent } from './menu.component';
import { NavigationComponent } from './navigation.component';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from './pizza-item.component';
import { CartComponent } from './cart.component';
import { CartItemComponent } from './cart-item.component';
import { CustomiseComponent } from './customise.component';
import { ToppingListComponent } from './topping-list.component';
import { SizeComponent } from './size.component';

@NgModule({
  declarations: [
    AppComponent,
    SizeComponent,
    HomeComponent,
    DealsComponent,
    MenuComponent,
    NavigationComponent,
    PizzaListComponent,
    PizzaItemComponent,
    CartComponent,
    CartItemComponent,
    CustomiseComponent,
    ToppingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
