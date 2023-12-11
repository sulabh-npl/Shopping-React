import Slider from "./Components/Carousel/Carousel";
import ProductsCard from "./Components/ProductsCard/ProductsCard";
import { useState, useEffect } from "react";
import "./HomePage.css";
import { getProductsInCategory, getRecentProducts } from "./Api/Api";
function HomePage() {
  const [recentProducts, setRecentProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [jweleryProducts, setJweleryProducts] = useState([]);
  const [electronicProducts, setElectronicProducts] = useState([]);
  useEffect(() => {
    const fetchRecentProducts = async (id) => {
      setRecentProducts(await getRecentProducts(id));
    };
    fetchRecentProducts(4);
    const fetchProductsInCategory = async () => {
      setMenProducts(
        (await getProductsInCategory("men's clothing")).slice(0, 3)
      );
      setWomenProducts(
        (await getProductsInCategory("women's clothing")).slice(0, 3)
      );
      setJweleryProducts((await getProductsInCategory("jewelery")).slice(0, 3));
      setElectronicProducts(
        (await getProductsInCategory("electronics")).slice(0, 3)
      );
    };
    fetchProductsInCategory();
  }, []);
  console.log(jweleryProducts);

  return (
    <>
      <Slider />
      <h2>Recent Products</h2>
      <div className="procucts_display">
        {recentProducts.map((item) => {
          return <ProductsCard item={item} key={item.id} />;
        })}
      </div>

      <h2>Products by Categories</h2>
      <hr />
      <h4>Jwelery</h4>

      <div className="procucts_display">
        {/* {jweleryProducts} */}
        {jweleryProducts.map((product) => {
          return <ProductsCard item={product} key={product.id} />;
        })}
      </div>
      <hr />
      <h4>Electronics</h4>

      <div className="procucts_display">
        {electronicProducts.map((product) => {
          return <ProductsCard item={product} key={product.id} />;
        })}
      </div>
      <hr />
      <h4>Men's Clothing</h4>

      <div className="procucts_display">
        {menProducts.map((product) => {
          return <ProductsCard item={product} key={product.id} />;
        })}
      </div>
      <hr />
      <h4>Women's Clothing</h4>

      <div className="procucts_display">
        {womenProducts.map((product) => {
          return <ProductsCard item={product} key={product.id} />;
        })}
      </div>
    </>
  );
}
export default HomePage;
