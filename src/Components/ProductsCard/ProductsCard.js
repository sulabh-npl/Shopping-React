import { Link } from "react-router-dom";
import "./ProductsCard.css";
function ProductsCard({ item }) {
  const { id, title, price, category, image, rating } = item;
  const { rate, count } = rating;
  return (
    <Link to={"/products/" + id}>
      <div className="card">
        <img
          className="cardImage"
          src={image}
          alt={title}
          style={{ width: "250px" }}
        />
        <h3>{title}</h3>
        <p> Rs {price}</p>
        <p>Category : {category} </p>
        <p>
          Rated: {rate}/5 Stars by {count} customers
        </p>
        {/* <Rating name="half-rating" defaultValue={rate} precision={0.5} readOnly /> */}
      </div>
    </Link>
  );
}
export default ProductsCard;
