import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="border-b bg-white px-6 py-5 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          TechHub
        </Link>
        <Link
          to="/cart"
          className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white"
        >
          Cart ({cartCount})
        </Link>
      </div>
    </header>
  );
};

export default Header;
