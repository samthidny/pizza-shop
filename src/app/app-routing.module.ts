import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { DealsComponent } from './pages/deals.component';
import { MenuComponent } from './pages/menu.component';
import { CartComponent } from './pages/cart.component';
import { CustomiseComponent } from './customise.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'deals', component: DealsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cart/:id', component: CustomiseComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
