import { Injectable } from '@angular/core';
import { LoginDTO, User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = environment.apiBaseUrl + '/user';

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

  signUp(userDTO: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, userDTO);
  }

  login(loginDTO: LoginDTO): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, loginDTO);
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
