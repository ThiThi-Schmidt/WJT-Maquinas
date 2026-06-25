export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  imagem?: string | null;
  category?: {
    id: number;
    name: string;
    icon?: string | null;
  };
};

export type CreateProductInput = {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: number;
  imagem?: string;
};


export type UpdateProductInput = Partial<CreateProductInput>;