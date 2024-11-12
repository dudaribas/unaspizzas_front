import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { MotoboyOrderCardComponent } from '../motoboy-order-card/motoboy-order-card.component';

@Component({
  selector: 'app-tela-motoboy',
  standalone: true,
  imports: [CommonModule, RouterModule, MotoboyOrderCardComponent],
  templateUrl: './motoboy.component.html',
  styleUrl: './motoboy.component.css',
})
export class MotoboyComponent {
  orderList: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.getOrdersByIdStatusOrder([3, 4]).subscribe((data) => {
      this.orderList = data;
    });
  }
}
