import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pizza } from '../types/pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'http://localhost:8080/pizza';

  constructor(private http: HttpClient) {}

  getPizzas(idPizzaCategory: number | null): Observable<Pizza[]> {
    const query = idPizzaCategory ? `?idPizzaCategory=${idPizzaCategory}` : '';
    return this.http.get<Pizza[]>(`${this.apiUrl}${query}`);
  }

  getPizza(idPizza: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${this.apiUrl}/${idPizza}`);
  }
}
