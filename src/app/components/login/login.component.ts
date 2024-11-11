import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  handleLogin() {
    this.userService.login({ email: this.email }).subscribe((data) => {
      if (data) {
        this.userService.updateUser(data);
        this.router.navigate(['/menu']);
      }
    });
  }

  ngOnInit() {
    this.userService.user$.subscribe((data) => {
      if (data) {
        this.router.navigate(['/menu']);
      }
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
