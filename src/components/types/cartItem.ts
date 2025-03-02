import { Product } from "./product";

export interface CartItem {
  productId: Product["id"];
  ammount: number;
}
