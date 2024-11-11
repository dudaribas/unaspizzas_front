import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderDTO } from '../types/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {}

  getPizzasByUser(idUser: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/user/${idUser}`);
  }

  createOrder(orderDTO: OrderDTO): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, orderDTO);
  }
}
