// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { UserOrderListComponent } from './components/user-order-list/user-order-list.component';
import { KitchenComponent } from './components/kitchen/kitchen.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { InitialRouteComponent } from './components/initial-route/initial-route.component';
import { KitchenPizzasComponent } from './components/kitchen-pizzas/kitchen-pizzas.component';
import { MotoboyComponent } from './components/motoboy/motoboy.component';
import { MotoboyOrderDetailComponent } from './components/motoboy-order-detail/motoboy-order-detail.component';

const routes: Routes = [
  { path: '', component: InitialRouteComponent },
  { path: 'menu', component: PizzaListComponent },
  { path: 'pizza/:id', component: PizzaDetailComponent },
  { path: 'cart', component: CartComponent },
  { path: 'my-orders', component: UserOrderListComponent },
  { path: 'kitchen', component: KitchenComponent },
  { path: 'kitchen/pizzas', component: KitchenPizzasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'motoboy', component: MotoboyComponent },
  { path: 'motoboy/order-detail/:id', component: MotoboyOrderDetailComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
};
