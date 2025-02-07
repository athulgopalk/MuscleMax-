import "./Footer.css";
import logo from "../../assets/Frontend_Assets/logo.png";
import instagram_icon from "./../../assets/Frontend_Assets/instagram_icon.png";
import whatsapp_icon from "./../../assets/Frontend_Assets/whatsapp_icon.png"
import pinterest_icon from "../../assets/Frontend_Assets/pintester_icon.png";
const Footer =() =>{
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} alt="maxmuscle-logo" />
          <p>MUSCLEMAX</p>
        </div>
        <ul className="footer-link">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} />
          </div>
          <div className="footer-icons-container">
            <img src={pinterest_icon} />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} />
          </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
      </div>
    );
}
export default Footer