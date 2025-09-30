interface ProductCardProps {
  name: string;
  price: number;
  onAdd: () => void;
}

const ProductCard = ({ name, price, onAdd }: ProductCardProps) => {
  return (
    <div className="border p-6 rounded-md">
      <h2>{name}</h2>
      <p>Rp {price}</p>
      <button
        className="mt-3 rounded-md bg-black px-3 py-1 text-white"
        onClick={onAdd}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
