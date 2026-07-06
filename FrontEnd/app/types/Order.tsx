export type OrderStatus = "PENDING" | "PREPARING" | "SENT" | "DELIVERED";

export type OrderItem = {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
  product: {
    name: string;
    imagem: string | null;
  };
};

export type Order = {
  id: number;
  userId: number;
  status: OrderStatus;
  total: number;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
  items: OrderItem[];
};