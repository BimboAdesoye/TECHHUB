import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Header from "./components/Header";
import CartNotification from "./components/cartNotification";
import CheckOut from "./components/CheckOut";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
          <CartNotification />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
