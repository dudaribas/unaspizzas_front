import { Injectable } from '@angular/core';
import { Pizza, PizzaOrder } from '../types/pizza';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: PizzaOrder[] = [];
  private cartItemsSubject = new BehaviorSubject<PizzaOrder[]>(this.cartItems);

  cartItems$ = this.cartItemsSubject.asObservable();

  init() {
    const cartItemsString = localStorage.getItem('cart');

    this.cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];
    this.cartItemsSubject.next(this.cartItems);
  }

  addToCart(pizzaOrder: PizzaOrder) {
    this.cartItems.push(pizzaOrder);
    this.cartItemsSubject.next(this.cartItems);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(idPizza: number) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.pizza.idPizza !== idPizza
    );
    this.cartItemsSubject.next(this.cartItems);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getTotalCart() {
    return this.cartItems.reduce(
      (total, cartItem) => total + cartItem.pizza.price * cartItem.quantity,
      0
    );
  }

  updateCartItem(pizzaOrder: PizzaOrder) {
    let index = this.cartItems.findIndex(
      (cartItem) => cartItem.pizza.idPizza === pizzaOrder.pizza.idPizza
    );
    this.cartItems[index] = pizzaOrder;
    this.cartItemsSubject.next(this.cartItems);

    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}
