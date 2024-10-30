import { CommonModule } from '@angular/common';
import { Component, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { PizzaOrder } from '../../types/pizza';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { matChevronLeft } from '@ng-icons/material-icons/baseline';

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

  constructor(private cartService: CartService, private router: Router) {
    this.cartService.init();
  }

  ngOnInit() {
    this.cartService.cartItems$.subscribe((data) => {
      this.cartItems = data;
    });

    this.cartTotal = this.cartService.getTotalCart();
  }

  ngDoCheck(): void {
    this.cartTotal = this.cartService.getTotalCart();
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
