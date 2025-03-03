import "./ProductDisplay.css";
import star_icon from "./../../assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../../assets/Frontend_Assets/star_dull_icon.png"
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay =(props) =>{
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="product-image" />
            <img src={product.image} alt="product-image" />
            <img src={product.image} alt="product-image" />
            <img src={product.image} alt="product-image" />
          </div>
          <div className="productdisplay-image">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt="product-image"
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="rating" />
            <img src={star_icon} alt="rating" />
            <img src={star_icon} alt="rating" />
            <img src={star_icon} alt="rating" />
            <img src={star_dull_icon} alt="rating" />
            <p>(1080)</p>
          </div>
          <div className="productdisplay-right-prices">
            <p className="productdisplay-right-price-old">
              ₹{product.old_price}
            </p>
            <p className="productdisplay-right-price-new">
              ₹{product.new_price}
            </p>
          </div>
          <div className="productdisplay-right-description">
            <p>
              Elevate your fitness journey with premium-quality supplements,
              nutritious fit foods, and high-performance accessories. Designed
              for athletes and fitness enthusiasts, MuscleMax products help you
              train harder, recover faster, and stay at your peak. Fuel your
              goals with the best in fitness innovation!
            </p>
            <div className="productdisplay-right-size">
              {["supplements", "snacks"].includes(product.category) && (
                <div className="productdisplay-right-sizes">
                  <h1>Select Size</h1>
                  <button className="productdisplay-right-sizes-btn">
                    0.4 kg
                  </button>
                  <button className="productdisplay-right-sizes-btn">
                    1.2 kg
                  </button>
                  <button className="productdisplay-right-sizes-btn">
                    2.0 kg
                  </button>
                  <button className="productdisplay-right-sizes-btn">
                    3.0 kg
                  </button>
                </div>
              )}
            </div>
            <button className="productdisplay-right-addtocart-btn" onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdiplay-right-category">
              <span>Category : {product.category} </span>
            </p>
          </div>
        </div>
      </div>
    );
}
export default ProductDisplay;