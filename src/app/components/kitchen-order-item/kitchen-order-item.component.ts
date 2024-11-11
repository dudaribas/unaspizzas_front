import { Component, Input } from '@angular/core';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen-order-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen-order-item.component.html',
  styleUrl: './kitchen-order-item.component.css',
})
export class KitchenOrderItemComponent {
  @Input()
  order!: Order;

  constructor(private orderService: OrderService, private router: Router) {}

  refreshPage() {
    const currentUrl = this.router.url;
    this.router
      .navigateByUrl('/menu', { skipLocationChange: true })
      .then(() => {
        this.router.navigate([currentUrl]);
      });
  }

  orderUpdateStatusPreparing() {
    this.orderService
      .updateStatusOrder(this.order.idOrder, {
        idStatusOrder: 2,
        nameStatus: 'Preparando',
      })
      .subscribe((data) => {
        this.refreshPage();
      });
  }

  orderUpdateStatusFinish() {
    this.orderService
      .updateStatusOrder(this.order.idOrder, {
        idStatusOrder: 3,
        nameStatus: 'Pronto',
      })
      .subscribe((data) => {
        this.refreshPage();
      });
  }
}
