import { prisma } from "../lb/prisma.js";

interface CreateProductData {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: number;
}

export class ProductService {
  async execute(data: CreateProductData) {
    if (!data.name || data.name.trim() === "") {
      throw new Error("O nome do produto é obrigatório.");
    }

    if (Number(data.price) < 0) {
      throw new Error("O preço do produto não pode ser menor que zero.");
    }

    if (isNaN(Number(data.stock))) {
      throw new Error("O estoque precisa ser um número.");
    }

    if (isNaN(Number(data.categoryId))) {
      throw new Error("categoryId é obrigatório e precisa ser um número válido.");
    }

    const categoryExists = await prisma.category.findUnique({
      where: { id: Number(data.categoryId) },
    });

    if (!categoryExists) {
      throw new Error("A categoria informada não existe.");
    }

    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        price: Number(data.price),
        stock: Number(data.stock),
        categoryId: Number(data.categoryId),
      },
    });

    return product;
  }
}