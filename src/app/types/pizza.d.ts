export interface PizzaCategory {
  idPizzaCategory: number;
  namePizzaCategory: string;
}

export interface Pizza {
  idPizza: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: PizzaCategory;
}
