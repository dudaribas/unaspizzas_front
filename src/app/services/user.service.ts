import { Injectable } from '@angular/core';
import { LoginDTO, User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/pizza';

  user: User | null = null;
  private userSubject = new BehaviorSubject<User | null>(this.user);

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getLocalUser();
  }

  getLocalUser() {
    const localUser = localStorage.getItem('user');

    if (localUser) {
      this.updateUser(JSON.parse(localUser) as User);
    }
  }

  updateUser(user: User) {
    this.user = user;
    this.userSubject.next(this.user);
    this.setLocalUser(this.user);
  }

  signUp(userDTO: User) {
    this.http.post<User>(`${this.apiUrl}/user`, userDTO).subscribe((data) => {
      this.updateUser(data);
    });
  }

  login(loginDTO: LoginDTO) {
    this.http
      .post<User>(`${this.apiUrl}/user/login`, loginDTO)
      .subscribe((data) => {
        this.updateUser(data);
      });
  }

  logout() {
    this.user = null;
    this.userSubject.next(this.user);
    localStorage.removeItem('user');
  }

  setLocalUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
