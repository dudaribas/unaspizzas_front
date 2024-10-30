import { Component } from '@angular/core';
import { Pizza } from '../../types/pizza';
import { PizzaService } from '../../services/pizza.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matChevronLeft,
  matMinus,
  matPlus,
} from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-pizza-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ matMinus, matPlus, matChevronLeft })],
  templateUrl: './pizza-detail.component.html',
  styleUrl: './pizza-detail.component.css',
})
export class PizzaDetailComponent {
  pizza!: Pizza;
  pizzaImage: string = '';

  pizzaCartQuantity: number = 0;

  constructor(
    private pizzaService: PizzaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const idPizza = this.route.snapshot.paramMap.get('id');
    this.getPizza(Number(idPizza));
  }

  getPizza(idPizza: number) {
    this.pizzaService.getPizza(idPizza).subscribe((data: Pizza) => {
      this.pizza = data;
      this.pizzaImage = `data:image/png;base64,${data.image}`;
    });
  }

  plusQuantity() {
    this.pizzaCartQuantity++;
  }

  minusQuantity() {
    if (this.pizzaCartQuantity != 0) {
      this.pizzaCartQuantity--;
    }
  }

  routeBack() {
    this.router.navigate(["/"])
  }
}
