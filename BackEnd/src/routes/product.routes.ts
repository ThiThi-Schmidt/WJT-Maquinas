import { Router } from "express";
import { ProductController } from "../controllers/product.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const productRouter = Router();
const productController = new ProductController();

productRouter.get("/", productController.getAll);
productRouter.get("/:id", productController.getById);

productRouter.use(authMiddleware);

productRouter.post("/", adminMiddleware, productController.create);
productRouter.put("/:id", adminMiddleware, productController.update);
productRouter.delete("/:id", adminMiddleware, productController.delete);

export default productRouter;
