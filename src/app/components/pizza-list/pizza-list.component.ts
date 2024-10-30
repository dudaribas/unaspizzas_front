import { Component } from '@angular/core';
import { Pizza } from '../../types/pizza';
import { PizzaService } from '../../services/pizza.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PizzaCardComponent } from '../pizza-card/pizza-card.component';

type Category = {
  id: number | null;
  name: string;
  image: string;
};

@Component({
  selector: 'app-pizza-list',
  standalone: true,
  imports: [CommonModule, RouterModule, PizzaCardComponent],
  templateUrl: './pizza-list.component.html',
  styleUrl: './pizza-list.component.css',
})
export class PizzaListComponent {
  categoryList: Category[] = [
    {
      id: null,
      name: 'Tudo',
      image: 'category-tudo.png',
    },
    {
      id: 1,
      name: 'Tradicional',
      image: 'category-tradicional.png',
    },
    {
      id: 2,
      name: 'Gourmet',
      image: 'category-gourmet.png',
    },
    {
      id: 3,
      name: 'Doces',
      image: 'category-doce.png',
    },
  ];

  idPizzaCategory: number | null = null;

  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {}

  getPizzas() {
    this.pizzaService
      .getPizzas(this.idPizzaCategory)
      .subscribe((data: Pizza[]) => {
        this.pizzas = data;
      });
  }

  ngOnInit() {
    this.getPizzas();
  }

  changeIdPizzaCategory(idPizzaCategory: number | null) {
    this.idPizzaCategory = idPizzaCategory;
    this.getPizzas();
  }
}
