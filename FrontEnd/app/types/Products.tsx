export type Product = {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  stock: number;
  categoryId: number;
  image?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type CreateProductInput = {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: number;
  image?: string;
};

export type UpdateProductInput = Partial<CreateProductInput>;