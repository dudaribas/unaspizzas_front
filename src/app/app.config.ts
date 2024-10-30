// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizza/:id', component: PizzaDetailComponent },
  { path: 'cart', component: CartComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
};
