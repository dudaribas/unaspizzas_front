import { Component, Input } from '@angular/core';
import { Order } from '../../types/order';
import { PizzaOrder } from '../../types/pizza';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-order-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-order-card.component.html',
  styleUrl: './user-order-card.component.css'
})
export class UserOrderCardComponent {

  @Input()
  order!: Order;

}
