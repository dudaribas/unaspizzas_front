import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../types/pizza';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = environment.apiBaseUrl + '/pizza';

  constructor(private http: HttpClient) {}

  getPizzas(idPizzaCategory: number | null): Observable<Pizza[]> {
    const query = idPizzaCategory ? `?idPizzaCategory=${idPizzaCategory}` : '';
    return this.http.get<Pizza[]>(`${this.apiUrl}${query}`);
  }

  getPizza(idPizza: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${idPizza}`);
  }

  addPizza(data: FormData): Observable<Pizza> {
    return this.http.post<Pizza>(this.apiUrl, data);
  }

  deletePizza(idPizza: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idPizza}`);
  }

  updatePizza(idPizza: number, data: FormData): Observable<Pizza> {
    return this.http.put<Pizza>(`${this.apiUrl}/${idPizza}`, data);
  }
}
