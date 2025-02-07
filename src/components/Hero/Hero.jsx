import "./Hero.css";
import dumbell_icon from "../../assets/Frontend_Assets/dumbel-icon.png";
import arrow_icon from "../../assets/Frontend_Assets/arrow.png";
import hero_image from "../../assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>UNLEASH YOUR POTENTIAL</h2>
        <div className="hero-left-text">
          <div className="hero-hand-icon">
            <p>boost</p>
            <img src={dumbell_icon} alt="" />
          </div>
          <p>your strength</p>
          <p>with our products</p>
        </div>
        <div className="hero-latest-btn">
          <p className="hero-btn-text">Explore Supplements</p>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="bodybuilder-image" className="hero-image" />
      </div>
    </div>
  );
};

export default Hero;