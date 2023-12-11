import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetails } from "./Api/Api";
import "./SingleProductPage.css";
function SingleProductPage() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const fetchProductDetails = async () => {
      setProductDetail(await getProductDetails(id));
    };
    fetchProductDetails();
  });
  return (
    <div className="container1">
      <img
        className="image1"
        src={productDetail.image}
        alt={productDetail.title}
      />
      <div className="textContainer1">
        <h2>{productDetail.title}</h2>
        <p className={"description"}>{productDetail.description}</p>
        <p className={"category"}>Category : {productDetail.category}</p>
      </div>
    </div>
  );
}
export default SingleProductPage;
