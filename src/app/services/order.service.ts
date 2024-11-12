import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderDTO, StatusOrder } from '../types/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) {}

  getOrdersByUser(idUser: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/user/${idUser}`);
  }

  createOrder(orderDTO: OrderDTO): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, orderDTO);
  }

  getOrdersByIdStatusOrder(idStatusOrderList: number[]): Observable<Order[]> {
    let query = idStatusOrderList.join(',');
    return this.http.get<Order[]>(`${this.apiUrl}?idStatusOrder=${query}`);
  }

  getOrderById(idOrder: string): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${idOrder}`);
  }

  updateStatusOrder(
    idOrder: number,
    statusOrder: StatusOrder
  ): Observable<Order> {
    return this.http.put<Order>(
      `${this.apiUrl}/${idOrder}/status`,
      statusOrder
    );
  }
}
