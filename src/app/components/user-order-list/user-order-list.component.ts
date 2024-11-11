import { Component } from '@angular/core';
import { Order } from '../../types/order';
import { OrderService } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matChevronLeft } from '@ng-icons/material-icons/baseline';
import { UserOrderCardComponent } from '../user-order-card/user-order-card.component';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-order-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NgIconComponent,
    UserOrderCardComponent,
  ],
  providers: [provideIcons({ matChevronLeft })],
  templateUrl: './user-order-list.component.html',
  styleUrl: './user-order-list.component.css',
})
export class UserOrderListComponent {
  orderList: Order[] = [];

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.user$.subscribe((data) => {
      if (data) {
        this.orderService.getOrdersByUser(data.idUser).subscribe((data) => {
          this.orderList = data;
        });

        return;
      }

      this.router.navigate(['/login']);
    });
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
