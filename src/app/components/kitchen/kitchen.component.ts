import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { KitchenOrderItemComponent } from '../kitchen-order-item/kitchen-order-item.component';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [CommonModule, RouterModule, KitchenOrderItemComponent],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent {
  orders!: Order[];

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.orderService.getOrdersByIdStatusOrder([1, 2]).subscribe((data) => {
      this.orders = data;
    });
  }

  goToKitchenPizzas() {
    this.router.navigate(["/kitchen/pizzas"])
  }
}
