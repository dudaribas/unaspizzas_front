import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-route',
  standalone: true,
  imports: [],
  templateUrl: './initial-route.component.html',
  styleUrl: './initial-route.component.css',
})
export class InitialRouteComponent {
  constructor(private router: Router) {}

  goToMenu() {
    this.router.navigate(['/menu']);
  }

  goToKitchen() {
    this.router.navigate(['/kitchen']);
  }

  goToOrders() {
    this.router.navigate(['/motoboy']);
  }
}
