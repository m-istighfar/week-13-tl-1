import { products } from "@/data/product";
import ProductCard from "./ProductCard";

interface ProductListProps {
  onAdd: () => void;
}

const ProductList = ({ onAdd }: ProductListProps) => {
  return (
    <section className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          onAdd={onAdd}
        />
      ))}
    </section>
  );
};

export default ProductList;
