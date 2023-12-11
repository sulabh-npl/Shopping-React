import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Navbar.css";
import { useContext } from "react";
import { CategoriesContext } from "../../Contexts/CategoriesContextProvider";
function Navbar() {
  const categories = useContext(CategoriesContext);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <h2>Logo</h2>
        </div>
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="cart__icon">
          <span className="cart__count">0</span>
          <FaCartShopping size={50} />
        </div>
      </div>

      <div className="navbar__links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {categories.map((item) => {
            return (
              <li>
                <Link to={`/categories/${item}`}>{item.toUpperCase()}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
