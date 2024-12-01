import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderDTO, StatusOrder } from '../types/order';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = environment.apiBaseUrl + '/order';

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
