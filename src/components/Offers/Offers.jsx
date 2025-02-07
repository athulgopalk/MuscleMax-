import "./Offers.css";
import exclusive_image from "../../assets/Frontend_Assets/exclusive_image.png"

const Offers =()=>{
    return (
      <div className="offers">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELLERS PRODUCT</p>
          <button className="cta">
            <span className="hover-underline-animation"> Shop now </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </div>
        <div className="offers-right">
          <img
            src={exclusive_image}
            alt="exclusive-image"
            className="exclusive-image"
          />
        </div>
      </div>
    );
}
export default Offers;