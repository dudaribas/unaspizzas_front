import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PizzaOrder } from '../../types/pizza';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { matChevronLeft } from '@ng-icons/material-icons/baseline';
import { OrderDTO } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent, CartItemComponent],
  providers: [provideIcons({ matChevronLeft })],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartItems: PizzaOrder[] = [];
  cartTotal: number = 0;
  user: User | null = null;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private userService: UserService,
    private router: Router
  ) {
    this.cartService.init();
  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
    });

    this.userService.user$.subscribe((data) => {
      this.user = data;
    });

    this.cartService.getTotalCart();
  }

  ngDoCheck(): void {
    this.cartTotal = this.cartService.getTotalCart();
  }

  backToHome() {
    this.router.navigate(['/menu']);
  }

  handleFinishOrder() {
    if (!this.user) {
      this.router.navigate(['/login']);
      return;
    }

    const orderDTO: OrderDTO = {
      user: this.user,
      orderPizzas: this.cartItems,
      statusOrder: {
        idStatusOrder: 1,
        nameStatus: 'Pendente',
      },
      totalPrice: this.cartTotal,
    };

    this.orderService.createOrder(orderDTO).subscribe(() => {
      this.cartService.removeAll();
    });
  }
}
