import { Component, Input } from '@angular/core';
import { Pizza } from '../../types/pizza';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.css',
})
export class PizzaCardComponent {
  @Input()
  pizza!: Pizza;
  pizzaImage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.pizzaImage = `data:image/png;base64,${this.pizza.image}`;
  }

  goToPizzaDetail() {
    this.router.navigate([`/pizza/${this.pizza.idPizza}`]);
  }
}
