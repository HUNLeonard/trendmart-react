import { Product } from "../../components/types/product";
import { allProducts } from "../../mock-database/products";

const getProductById = async (productId: Product["id"]) => {
  // Would do fetch overhere
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
  // Then convert the respond with .json and wait it out -> then return with type
  return allProducts.find((p) => p.id === productId) as Product;
};

export default getProductById;
