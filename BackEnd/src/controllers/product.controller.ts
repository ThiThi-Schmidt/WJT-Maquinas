import { type Request, type Response } from "express";
import { prisma } from "../lb/prisma.js"; 

export class ProductController {

  async getAll(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({ orderBy: { id: "asc" } });
      return res.json(products);
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao buscar produtos" });
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
      const { name, description, price, stock } = req.body;
      const { ProductService } = await import("../services/product.service.js");
      const productService = new ProductService();
      const product = await productService.execute({ name, description, price, stock });

      return res.status(201).json(product);
    } catch (err: any) {
      return res.status(400).json({ error: err.message || "Erro ao criar produto" });
    }
  }


  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { name, description, price, stock } = req.body;
      
      const product = await prisma.product.update({
        where: { id },
        data: { name, description, price: Number(price), stock: Number(stock) }
      });
      
      return res.json(product);
    } catch (err: any) {
      return res.status(500).json({ error: "Erro ao atualizar produto" });
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
