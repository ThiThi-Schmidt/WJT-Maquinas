import { prisma } from "../lb/prisma.js";

interface CreateOrderRequest {
  productId: number;
  quantity: number;
}

export class OrderService {
  async create(userId: number, items: CreateOrderRequest[]) {
    if (!items || items.length === 0) {
      throw new Error("O pedido precisa ter pelo menos um item.");
    }

    let total = 0;
    const orderItemsData: { productId: number; quantity: number; price: number }[] = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({ where: { id: item.productId } });
      
      if (!product) {
        throw new Error(`Produto ID ${item.productId} não encontrado.`);
      }
      if (product.stock < item.quantity) {
        throw new Error(`Estoque insuficiente para o produto: ${product.name}`);
      }

      total += product.price * item.quantity;
      orderItemsData.push({
        productId: product.id,
        quantity: item.quantity,
        price: product.price,
      });
    }

    const order = await prisma.$transaction(async (tx) => {
      const newOrder = await tx.order.create({
        data: {
          userId,
          total,
          items: {
            create: orderItemsData,
          },
        },
        include: {
          items: true,
        },
      });

      for (const item of items) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return newOrder;
    });

    return order;
  }

  async getUserOrders(userId: number) {
    return prisma.order.findMany({
      where: { userId },
      include: { items: { include: { product: true } } },
      orderBy: { createdAt: "desc" },
    });
  }

  async getAllOrders() {
    return prisma.order.findMany({
      include: { user: { select: { id: true, name: true, email: true } }, items: true },
      orderBy: { createdAt: "desc" },
    });
  }
}