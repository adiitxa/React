import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Runs only once on mount

  return (
    <div className="product-container" style={{ padding: "2rem" }}>
      <h1>E-Commerce Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <img src={product.image} alt={product.title} style={{ height: "100px" }} />
              <h3>{product.title}</h3>
              <p><strong>${product.price}</strong></p>
              <p>{product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
