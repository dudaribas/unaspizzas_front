export interface User {
  idUser: number;
  name: string;
  email: string;
  address: string;
}

export type LoginDTO = Pick<User, 'email'>;
