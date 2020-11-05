import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './pages/cart.component';
import { DealsComponent } from './pages/deals.component';
import { HomeComponent } from './pages/home.component';
import { MenuComponent } from './pages/menu.component';
import { NavigationComponent } from './navigation.component';
import { PizzaListComponent } from './pizza-list.component';
import { PizzaItemComponent } from './pizza-item.component';
import { CartItemComponent } from './cart-item.component';
import { CustomiseComponent } from './customise.component';
import { ToppingListComponent } from './topping-list.component';
import { PizzaOptionComponent } from './pizza-option.component';
import { SizePipe } from './size.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DealsComponent,
    MenuComponent,
    NavigationComponent,
    PizzaListComponent,
    PizzaItemComponent,
    CartComponent,
    CartItemComponent,
    CustomiseComponent,
    ToppingListComponent,
    PizzaOptionComponent,
    SizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
