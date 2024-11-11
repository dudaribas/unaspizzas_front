import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User } from '../../types/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  address: string = '';

  constructor(private userService: UserService, private router: Router) {}

  handleSignup() {
    const userDTO: User = {
      idUser: 0,
      name: this.name,
      email: this.email,
      address: this.address,
    };

    this.userService.signUp(userDTO).subscribe((data) => {
      if (data) {
        this.userService.updateUser(data);
        this.router.navigate(['/menu']);
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
