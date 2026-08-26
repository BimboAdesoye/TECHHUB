import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>

        <div className="mt-8 rounded-lg bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">Your cart is empty.</p>

          <Link
            to="/"
            className="mt-4 inline-block rounded-lg bg-black px-5 py-3 text-white"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <h2 className="text-2xl font-bold">Your Cart</h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Cart items */}
        <section className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => (
            <div key={item.id} className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="h-24 w-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="mt-1 text-gray-600">
                    ₦{Number(item.price).toLocaleString()}
                  </p>
                </div>

                {/* Quantity controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="h-8 w-8 rounded border cursor-pointer"
                  >
                    -
                  </button>

                  <span className="w-6 text-center">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded border cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeCart(item.id)}
                  className="text-sm text-red-600 hover:text-red-800 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Summary */}
        <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Order Summary</h3>

          <div className="mt-6 flex justify-between">
            <span>Subtotal</span>

            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <div className="my-4 border-t" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block rounded-lg bg-black px-5 py-3 text-center font-semibold text-white"
          >
            Proceed to Checkout
          </Link>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
