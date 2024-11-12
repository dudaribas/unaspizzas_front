import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motoboy-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motoboy-order-card.component.html',
  styleUrl: './motoboy-order-card.component.css',
})
export class MotoboyOrderCardComponent {
  @Input()
  order!: Order;

  constructor(private orderService: OrderService, private router: Router) {}

  refreshPage() {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  orderUpdateStatusDeliveryRoute() {
    this.orderService
      .updateStatusOrder(this.order.idOrder, {
        idStatusOrder: 4,
        nameStatus: 'Em rota de entrega',
      })
      .subscribe(() => {
        this.refreshPage();
      });
  }

  goToMotoboyOrderDetail(idOrder: number) {
    this.router.navigate([`/motoboy/order-detail/${idOrder}`]);
  }
}
