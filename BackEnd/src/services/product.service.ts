import { prisma } from "../lb/prisma.js";

interface CreateProductData {
  name: string;
  description?: string;
  price: number;
  stock: number;
}

export class ProductService {
  async execute(data: CreateProductData) {
    if (data.price < 0) {
      throw new Error("O preço do produto não pode ser menor que zero.");
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        price: Number(data.price),
        stock: Number(data.stock)
        // ...(data.description !== undefined && { description: data.description }),
      }
    });

    return product;
  }
}
