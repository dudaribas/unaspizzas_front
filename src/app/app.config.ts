// src/app/app.config.ts

import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './components/pizza-detail/pizza-detail.component';

const routes: Routes = [
  { path: '', component: PizzaListComponent },
  { path: 'pizza/:id', component: PizzaDetailComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)],
};
