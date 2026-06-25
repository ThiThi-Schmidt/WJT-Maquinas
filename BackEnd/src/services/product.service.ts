import { prisma } from "../lb/prisma.js";

interface CreateProductData {
  name: string;
  description?: string;
 price: number;
  stock: number;
  categoryId: number;
  imagem?: string;
}

export class ProductService {
  async execute(data: CreateProductData) {
    if (!data.name?.trim()) {
      throw new Error("O nome do produto é obrigatório.");
    }

    if (data.price < 0) {
      throw new Error("O preço do produto não pode ser menor que zero.");
    }

    if (!data.categoryId || Number.isNaN(Number(data.categoryId))) {
      throw new Error("categoryId inválido.");
    }

    const categoryId = Number(data.categoryId);

    console.log("categoryId recebido:", data.categoryId);
    console.log("categoryId convertido:", categoryId);

    const allCategories = await prisma.category.findMany();
    console.log("Categorias que o backend está enxergando:", allCategories);

    const categoryExists = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    console.log("Categoria encontrada:", categoryExists);

    if (!categoryExists) {
      throw new Error("A categoria informada não existe.");
    }

    console.log("Antes do prisma.product.create");

    const product = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description ?? null,
        price: Number(data.price),
        stock: Number(data.stock),
        imagem: data.imagem ?? null,
        categoryId: categoryId,
      },
    });

    console.log("Produto criado com sucesso:", product);

    return product;
  }
}