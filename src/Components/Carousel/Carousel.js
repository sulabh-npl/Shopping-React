import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.css";
import { Link } from "react-router-dom";
function Slider() {
  return (
    <div className="carousel">
      <Carousel showThumbs={false}>
        <div>
          <img src="https://media.istockphoto.com/id/155013169/photo/jewelry-on-window-display.jpg?s=612x612&w=0&k=20&c=HJOD1gPfNRlDfewJH89BmtvwKU2soa0I1YBxzqaNO8M=" />
          <p className="legend">
            Jwelerys
            <button>
              <Link to={"/categories/jwelery"}>Shop now</Link>
            </button>
          </p>
        </div>
        <div>
          <img src="https://chennai.vit.ac.in/wp-content/uploads/2021/09/What-is-Electronics-Engineering-Difference-Between-Electrical-and-Electronics-Engineering.jpg" />
          <p className="legend">
            Electronics
            <button>
              <Link to={"/categories/electronics"}>Shop now</Link>
            </button>
          </p>
        </div>
        <div>
          <img src="https://media.vogue.co.uk/photos/5e31584f71852d00086ffd48/master/w_1600%2Cc_limit/001-Street-Style-Menswear-Jan-2020-Vogue-credit-Jonathan-Daniel-Pryce.jpg" />
          <p className="legend">
            Mens Clothing
            <button>
              <Link to={"/categories/men's%20clothing"}>Shop now</Link>
            </button>
          </p>
        </div>
        <div>
          <img src="https://aranacouture.com/uploads/Online-Shopping.jpg" />
          <p className="legend">
            Womens Clothing{" "}
            <button>
              <Link to={"/categories/women's%20clothing"}>Shop now</Link>
            </button>
          </p>
        </div>
      </Carousel>
    </div>
  );
}
export default Slider;
