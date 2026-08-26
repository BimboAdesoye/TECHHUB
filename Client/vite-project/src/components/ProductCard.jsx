import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image_url}
          alt={product.name}
          className="h-48 w-full rounded-lg object-cover"
          // className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="mt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">{product.category}</p>

          <h3 className="mt-1 text-lg font-semibold text-gray-900">
            {product.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{product.description}</p>

          <p className="mt-4 text-xl font-bold text-gray-900">
            ₦{Number(product.price).toLocaleString()}
          </p>
        </div>
      </Link>
      <button
        onClick={() => addToCart(product)}
        className="cursor-pointer mt-4 w-full rounded-lg bg-black px-4 py-2 font-medium text-white hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
