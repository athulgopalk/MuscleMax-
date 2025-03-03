import "./Navbar.css"
import logo from "../../assets/Frontend_Assets/logo.png"
import cart_icon from "../../assets/Frontend_Assets/cart_icon.png"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
const Navbar = () =>{
  const [menu,setMenu] = useState("");
  const {getTotalCartItems} = useContext(ShopContext);
    return (
      <div className="navbar">
        <div className="nav-logo">
          <Link to="/" >
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Shop
            </Link>
            {menu === "Shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Supplements");
            }}
          >
            <Link
              to="/supplements"
              style={{ textDecoration: "none", color: "black" }}
            >
              Supplements
            </Link>
            {menu === "Supplements" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Gear & Accessories");
            }}
          >
            <Link
              to="/gears&accessories"
              style={{ textDecoration: "none", color: "black" }}
            >
              Gear & Accessories
            </Link>{" "}
            {menu === "Gear & Accessories" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Fit Foods");
            }}
          >
            <Link
              to="/fitfoods"
              style={{ textDecoration: "none", color: "black" }}
            >
              Fit Foods
            </Link>

            {menu === "Fit Foods" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <div className="nav-cart">
            <Link to="/cart">
              <img src={cart_icon} alt="cart-icon" className="nav-cart-icon" />
            </Link>
            <span className="nav-cart-counter">{getTotalCartItems()}</span>
          </div>
        </div>
      </div>
    );
}
export default Navbar