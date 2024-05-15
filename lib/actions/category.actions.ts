"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  console.log("before connecting to db");
  try {
    await connectToDatabase();
    console.log("before creating category");
    const newCategory = await Category.create({ name: categoryName });
    console.log("after creating category");
    return JSON.parse(JSON.stringify(newCategory));
  } catch (error) {
    handleError(error);
  }
};

export const testingFunction = () => {
  console.log("This function is just for testing");
};

export const getAllCategories = async () => {
  console.log("Harsh testing");
  try {
    await connectToDatabase();

    const categories = await Category.find();

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    handleError(error);
  }
};
