
interface ProductData {
  id: number;
  name: string;
  category?: string;
  description: string;
  price: number;
  image: string;
  available: true;
  tag: string;
  stock: number;
}

interface ProductCardProps {
  product: ProductData;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border p-4 rounded shadow">
      <h3>{product.name}</h3>
      <p>R$ {product.price}</p>
    </div>
  );
}