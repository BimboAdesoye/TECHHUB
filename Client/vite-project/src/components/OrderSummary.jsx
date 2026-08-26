import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function OrderSummary() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/orders/${id}`);

        setOrder(response.data.order);
        setItems(response.data.items);
      } catch (error) {
        console.error("Failed to fetch order:", error);
        setError("Unable to load your order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-gray-600">Loading your order...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12 text-center">
        <p className="text-red-600">{error}</p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-black px-5 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="text-center">
        <div className="text-4xl">✓</div>

        <h2 className="mt-3 text-2xl font-bold">Order Confirmed</h2>

        <p className="mt-2 text-gray-600">Thank you for your purchase!</p>

        <p className="mt-1 text-sm text-gray-500">Order #{order.id}</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-3"></div>

        <section className="lg:col-span-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Order Items</h3>

            <div className="mt-6 divide-y">
              {items.map((item) => (
                <div
                  key={item.product_id}
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

        <aside className="h-fit rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Order Details</h3>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number</span>

              <span className="font-medium">#{order.id}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>

              <span className="font-medium capitalize">{order.status}</span>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>

                <span>₦{Number(order.total).toLocaleString()}</span>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="mt-6 block w-full rounded-lg bg-black px-5 py-3 text-center font-semibold text-white hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}

export default OrderSummary;
