import { Component } from '@angular/core';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matChevronLeft } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-motoboy-order-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconComponent],
  providers: [provideIcons({ matChevronLeft })],
  templateUrl: './motoboy-order-detail.component.html',
  styleUrl: './motoboy-order-detail.component.css',
})
export class MotoboyOrderDetailComponent {
  order!: Order;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const idOrder = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(idOrder!).subscribe((data) => {
      this.order = data;
    });
  }

  backToMotoboyOrderList() {
    this.router.navigate(['/motoboy']);
  }

  orderUpdateStatusConfirmDelivery() {
    this.orderService
      .updateStatusOrder(this.order.idOrder, {
        idStatusOrder: 5,
        nameStatus: 'Finalizado',
      })
      .subscribe(() => {
        this.backToMotoboyOrderList();
      });
  }
}
