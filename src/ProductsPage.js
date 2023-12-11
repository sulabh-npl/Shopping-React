import { useState, useEffect } from "react";
import { getProducts } from "./Api/Api";
import ProductsCard from "./Components/ProductsCard/ProductsCard";
import "./ProductsPage.css";
function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProducts());
    };
    fetchProducts();
  }, []);
  return (
    <div class="container">
      {products.map((product) => {
        return <ProductsCard item={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductsPage;
