import { Component, Input } from '@angular/core';
import { PizzaOrder } from '../../types/pizza';
import { CartService } from '../../services/cart.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matMinus, matPlus } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [NgIconComponent],
  providers: [provideIcons({ matMinus, matPlus })],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  @Input()
  pizzaOrder!: PizzaOrder;
  pizzaImage: string = '';

  constructor(private cartService: CartService) {
    // this.cartService.init();
  }

  ngOnInit() {
    this.pizzaImage = `data:image/png;base64,${this.pizzaOrder.pizza.image}`;
  }

  handleMinusQuntity() {
    if (this.pizzaOrder.quantity - 1 == 0) {
      this.cartService.removeFromCart(this.pizzaOrder.pizza.idPizza);

      return;
    }

    this.pizzaOrder.quantity--;
    this.cartService.updateCartItem(this.pizzaOrder);
  }

  handlePlusQuntity() {
    this.pizzaOrder.quantity++;
    this.cartService.updateCartItem(this.pizzaOrder);
  }
}
