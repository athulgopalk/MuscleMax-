import "./LatestSupplements.css"
import latest_supplements from "../../assets/Frontend_Assets/latest_supplements";
import Item from "../Item/Item";


const LatestSupplements = () => {
  return (
    <div className="latest-supplements">
      <h1>Latest Power-Packed Supplements</h1>
      <hr />
      <div className="latest-supplements-item">
        {latest_supplements.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LatestSupplements;
