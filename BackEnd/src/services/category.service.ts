import { prisma } from "../lb/prisma.js";

class CategoryService {
  async getAll() {
    const categories = await prisma.category.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return categories;
  }

  async create(name: string, icon?: string) {
    if (!name || !name.trim()) {
      throw new Error("O nome da categoria é obrigatório.");
    }

    const category = await prisma.category.create({
      data: {
        name: name.trim(),
        icon: icon?.trim() || null,
      },
    });

    return category;
  }
}

export { CategoryService };