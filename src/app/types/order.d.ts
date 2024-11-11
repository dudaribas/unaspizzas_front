import { PizzaOrder } from './pizza';
import { User } from './user';

export interface StatusOrder {
  idStatusOrder: number;
  nameStatus: string;
}

export interface OrderDTO {
  user: User;
  orderPizzas: PizzaOrder[];
  statusOrder: StatusOrder;
  totalPrice: number;
}

export interface Order extends OrderDTO {
  idOrder: number;
  createdAt: string;
  updatedAt: string;
}
