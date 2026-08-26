import UseFetch from "../hooks/UseFetch";
import ProductCard from "./ProductCard";
import { useState } from "react";

const ProductList = () => {
  const {
    data: products,
    loading,
    error,
  } = UseFetch("http://localhost:3000/products");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-8 text-3xl font-bold">Our Products</h2>
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
        />
      </div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`cursor-pointer whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
              category === item
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length === 0 ? (
          <p className="py-12 text-center text-gray-500">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default ProductList;
