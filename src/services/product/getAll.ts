import { Product } from "../../components/types/product";
import { allProducts } from "../../mock-database/products";

const getAllProducts = async () => {
  // Would do fetch overhere
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  // Then convert the respond with .json and wait it out -> then return with type
  return allProducts as Product[];
};

export default getAllProducts;
