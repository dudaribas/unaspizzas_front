import { Component } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Pizza, PizzaCategory } from '../../types/pizza';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matCameraAlt,
  matEdit,
  matDelete,
  matChevronLeft,
} from '@ng-icons/material-icons/baseline';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitchen-pizzas',
  standalone: true,
  imports: [CommonModule, NgIconComponent, FormsModule],
  providers: [
    provideIcons({ matCameraAlt, matEdit, matDelete, matChevronLeft }),
  ],
  templateUrl: './kitchen-pizzas.component.html',
  styleUrl: './kitchen-pizzas.component.css',
})
export class KitchenPizzasComponent {
  pizzas: Pizza[] = [];
  imageSelect: File | null = null;
  isEditing: boolean = false;
  editPizzaId: number = 0;

  imageUrl: string | ArrayBuffer | null = null;
  pizzaName: string = '';
  pizzaDescription: string = '';
  pizzaPrice: number = 0;
  pizzaCategory: string = '1';

  constructor(private pizzaService: PizzaService, private router: Router) {}

  ngOnInit() {
    this.pizzaService.getPizzas(null).subscribe((data) => {
      this.pizzas = data;
    });
  }

  refreshPage() {
    const currentUrl = this.router.url;
    this.router
      .navigateByUrl('/menu', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }

  handleChangeImage(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.imageSelect = file;

      const reader = new FileReader();

      reader.onload = () => {
        this.imageUrl = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }

  buildFormData() {
    const formData = new FormData();

    formData.append('name', this.pizzaName);
    formData.append('description', this.pizzaDescription);
    formData.append('price', this.pizzaPrice.toString());
    formData.append(
      'category',
      JSON.stringify({
        idPizzaCategory: this.pizzaCategory,
      })
    );

    if (this.imageSelect) {
      formData.append('image', this.imageSelect);
    }

    return formData;
  }

  handleAddPizza() {
    const formData = this.buildFormData();

    this.pizzaService.addPizza(formData).subscribe((data) => {
      this.refreshPage();
    });
  }

  handleUpdatePizza() {
    const formData = this.buildFormData();

    this.pizzaService
      .updatePizza(this.editPizzaId, formData)
      .subscribe((data) => {
        this.refreshPage();
      });
  }

  handleDeletePizza(idPizza: number) {
    this.pizzaService.deletePizza(idPizza).subscribe(() => {
      this.refreshPage();
    });
  }

  editMode(pizza: Pizza) {
    this.isEditing = true;
    this.pizzaName = pizza.name;
    this.pizzaDescription = pizza.description;
    this.pizzaPrice = pizza.price;
    this.pizzaCategory = pizza.category.idPizzaCategory.toString();
    this.editPizzaId = pizza.idPizza;
    this.imageUrl = `data:image/png;base64,${pizza.image}`;
  }

  cancelEdit() {
    this.isEditing = false;
    this.pizzaName = '';
    this.pizzaDescription = '';
    this.pizzaPrice = 0;
    this.pizzaCategory = '';
    this.editPizzaId = 0;
    this.imageUrl = null;
  }

  routeBack() {
    this.router.navigate(['/kitchen']);
  }
}
