import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight">
          Tech<span className="text-indigo-600">Hub</span>
        </Link>

        <Link
          to="/cart"
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
        >
          Cart{cartCount > 0 && ` (${cartCount})`}
        </Link>
      </div>
    </header>
  );
};

export default Header;
