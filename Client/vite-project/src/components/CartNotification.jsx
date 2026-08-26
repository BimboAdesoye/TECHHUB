import { useCart } from "../context/CartContext";

const CartNotification = () => {
  const { notification } = useCart();

  if (!notification) {
    return null;
  }
  return (
    <div className="fixed bottom-4 right-4 z-50 animate-[slideIn_0.25s_ease-out] rounded-lg bg-black px-4 py-3 text-sm text-white shadow-lg">
      <span className="mr-2">✓</span>
      {notification}
    </div>
  );
};

export default CartNotification;
