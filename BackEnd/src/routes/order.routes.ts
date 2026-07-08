import { Router } from "express";
import { OrderController } from "../controllers/order.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";

const orderRouter = Router();
const orderController = new OrderController();

orderRouter.use(authMiddleware);

orderRouter.post("/", orderController.create);
orderRouter.get("/my-orders", orderController.getMyOrders);

orderRouter.patch("/:id/status", adminMiddleware, orderController.updateStatus);
orderRouter.get("/admin", adminMiddleware, orderController.getAll);


export default orderRouter;