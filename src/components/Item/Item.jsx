import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`} className="item-link">
        <img src={props.image} alt="supplements-image" onClick={window.scrollTo(0,0)} />
        <p className="item-name">{props.name}</p>
        <div className="item-prices">
          <p className="item-price-new">₹{props.new_price}</p>
          <p className="item-price-old">₹{props.old_price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
