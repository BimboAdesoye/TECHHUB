import UseFetch from "../hooks/UseFetch";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const {
    data: products,
    loading,
    error,
  } = UseFetch("http://localhost:3000/products");

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Failed to load products.</p>;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="mb-8 text-3xl font-bold">
        Our Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
