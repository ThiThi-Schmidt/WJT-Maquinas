import { type Request, type Response } from "express";
import { prisma } from "../lb/prisma.js"; 

export class ProductController {

  async getAll(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({include: {category: true,},orderBy: {id: "asc",},});
      return res.json(products);
    } catch (err: any) {
      console.error("Erro real ao buscar produtos:", err);
      return res.status(500).json({
        error: err?.message || "Erro ao buscar produtos"
      });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const product = await prisma.product.findUnique({ where: { id } });
      
      if (!product) {
        return res.status(404).json({ error: "Produto não encontrado" });
      }
      
      return res.json(product);
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao buscar produto" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { name, description, price, stock, categoryId, imagem } = req.body;
      const { ProductService } = await import("../services/product.service.js");
      const productService = new ProductService();

      const product = await productService.execute({
        name,
        description,
        price,
        stock,
        categoryId,
        imagem
      });

      return res.status(201).json(product);
    } catch (err: any) {
      console.error("Erro ao criar produto:", err);
      return res.status(400).json({ error: err.message || "Erro ao criar produto" });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "ID do produto inválido." });
      }

      const { name, description, price, stock, categoryId, imagem } = req.body;

      const productExists = await prisma.product.findUnique({ where: { id } });
      if (!productExists) {
        return res.status(404).json({ error: "Produto não encontrado para atualização." });
      }
      if (categoryId !== undefined) {
        const categoryExists = await prisma.category.findUnique({ where: { id: Number(categoryId) } });
        if (!categoryExists) {
          return res.status(400).json({ error: "A categoria informada não existe." });
        }
      }
      const updateData: any = {};
      
      if (name !== undefined) updateData.name = name;
      if (description !== undefined) updateData.description = description;
      if (price !== undefined) updateData.price = Number(price);
      if (stock !== undefined) updateData.stock = Number(stock);
      if (imagem !== undefined) updateData.imagem = imagem;
      if (categoryId !== undefined) updateData.categoryId = Number(categoryId);

      const product = await prisma.product.update({
        where: { id },
        data: updateData
      });
      
      return res.json(product);
    } catch (err: any) {
      console.error("Erro real ao atualizar produto:", err);
      return res.status(500).json({ error: err.message || "Erro interno ao atualizar produto." });
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await prisma.product.delete({ where: { id } });
      return res.status(204).send();
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao deletar produto" });
    }
  }
}
