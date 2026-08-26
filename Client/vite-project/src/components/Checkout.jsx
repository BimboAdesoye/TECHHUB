import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import axios from "axios";
import { useState } from "react";

function CheckOut() {
  const [placingOrder, setPlacingOrder] = useState(false);
  const [error, setError] = useState(null);
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    setPlacingOrder(true);
    setError(null);

    try {
      const orderItems = cartItems.map((item) => ({
        productId: item.id,
        quantity: item.quantity,
      }));

      const response = await axios.post("http://localhost:3000/orders", {
        items: orderItems,
      });

      const orderId = response.data.order.id;

      clearCart();

      navigate(`/orders/${orderId}`);
    } catch (error) {
      console.error("Failed to place order:", error);
      setError("Failed to place order. Please try again.");
    } finally {
      setPlacingOrder(false);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  if (cartItems.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <h2 className="text-2xl font-bold">Checkout</h2>

        <div className="mt-8 rounded-lg bg-white p-8 text-center shadow-sm">
          <p className="text-gray-600">There are no items to checkout.</p>

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
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <h2 className="text-2xl font-bold">Checkout</h2>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        {/* Order items */}
        <section className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Order Summary</h3>

            <div className="mt-6 divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 py-4"
                >
                  <div>
                    <h4 className="font-medium">{item.name}</h4>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-medium">
                    ₦{(Number(item.price) * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Total */}
        <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Order Total</h3>

          <div className="mt-6 flex justify-between">
            <span>Subtotal</span>

            <span>₦{total.toLocaleString()}</span>
          </div>

          <div className="my-4 border-t" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>₦{total.toLocaleString()}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={placingOrder}
            className="cursor-pointer mt-6 w-full rounded-lg bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </button>
          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <Link
            to="/cart"
            className="mt-3 block text-center text-sm text-gray-600 hover:text-black"
          >
            Back to Cart
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default CheckOut;
