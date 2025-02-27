import { Category } from "../../components/types/category";
import { categories } from "../../mock-database/categories";

const getAllCategories = async () => {
  // Would do fetch overhere
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000));
  // Then convert the respond with .json and wait it out -> then return with type
  return categories as Category[];
};
export default getAllCategories;
