import { useState } from "react";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png";
import logo from "../../assets/Frontend_Assets/logo.png";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="mobile-navbar">
      <div className="mobile-nav-header">
        <Link to="/">
          <img src={logo} alt="logo" className="mobile-logo" />
        </Link>
<div></div>
        <div className="mobile-nav-cart">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" />
          </Link>
          <span className="mobile-nav-cart-counter">{getTotalCartItems()}</span>
        </div>

        <div onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mobile-menu-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>

      <div className={`mobile-nav-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/supplements" onClick={() => setIsOpen(false)}>
              Supplements
            </Link>
          </li>
          <li>
            <Link to="/gears&accessories" onClick={() => setIsOpen(false)}>
              Gear & Accessories
            </Link>
          </li>
          <li>
            <Link to="/fitfoods" onClick={() => setIsOpen(false)}>
              Fit Foods
            </Link>
          </li>
        </ul>
        <div className="mobile-nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
