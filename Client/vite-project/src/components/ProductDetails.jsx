import { Link, useParams } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = UseFetch(`http://localhost:3000/products/${id}`);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>Failed to load product.</p>;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Link to="/" className="text-sm text-gray-600 hover:text-black">
        ← Back to catalog
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full rounded-xl object-cover"
        />

        <div>
          <p className="text-sm text-gray-500">{product.category}</p>

          <h1 className="mt-2 text-4xl font-bold">{product.name}</h1>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <p className="mt-6 text-3xl font-bold">
            ₦{Number(product.price).toLocaleString()}
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 font-medium text-white hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
