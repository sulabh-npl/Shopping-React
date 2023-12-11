import { useState, useEffect } from "react";
import { getProductsInCategory } from "./Api/Api";
import ProductsCard from "./Components/ProductsCard/ProductsCard";
import "./ProductsPage.css";
import { useParams } from "react-router-dom";
function CategoriesPage() {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setProducts(await getProductsInCategory(name));
    };
    fetchProducts();
  }, [name]);
  return (
    <div class="container">
      {products.map((product) => {
        return <ProductsCard item={product} key={product.id} />;
      })}
    </div>
  );
}

export default CategoriesPage;
