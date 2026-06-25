import express, { type Request, type Response } from "express";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import userRouter from "./routes/user.routes.js";
import { categoryRoutes } from "./routes/category.routes.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

app.use(authRouter);
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});