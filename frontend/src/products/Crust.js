import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";

function Crust({
  id,
  title,
  item,
  item2,
  item3,
  item4,
  price,
  price2,
  price3,
  price4,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        item: item,
        item2: item2,
        item3: item3,
        item4: item4,
        price: price,
        price2: price2,
        price3: price3,
        price4: price4,
      },
    });
  };

  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="product">
        <div className="product_info">
          <a onClick={addToBasket}>
            <h4>{item}</h4>
            <strong>${price}</strong>
          </a>
        </div>
        <div className="product_info">
          <a onClick={addToBasket}>
            <h4>{item2}</h4>
            <strong>${price2}</strong>
          </a>
        </div>
        <div className="product_info">
          <a onClick={addToBasket}>
            <h4>{item3}</h4>
            <strong>${price3}</strong>
          </a>
        </div>
        <div className="product_info">
          <a onClick={addToBasket}>
            <h4>{item4}</h4>
            <strong>${price4}</strong>
          </a>
        </div>
      </div>
    </>
  );
}

export default Crust;
