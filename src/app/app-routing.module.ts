import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DealsComponent } from './deals.component';
import { MenuComponent } from './menu.component';
import { CartComponent } from './cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
