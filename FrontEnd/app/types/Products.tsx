export type Products = {
  id: number;
  name: string;
  description: string | null;
  price: number;
  stock: number;
  imagem?: string | null;
  categoryId: number;
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