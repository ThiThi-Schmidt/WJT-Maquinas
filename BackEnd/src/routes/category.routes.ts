import { Router } from "express";
import { CategoryController } from "../controllers/category.controller.js";

const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.get("/", categoryController.getAll.bind(categoryController));
categoryRoutes.post("/", categoryController.create.bind(categoryController));

export { categoryRoutes };