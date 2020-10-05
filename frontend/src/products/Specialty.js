import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";

function Specialty({
  id,
  title,
  item,
  item2,
  item3,
  item4,
  item5,
  price,
  price2,
  price3,
  price4,
  price5
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
        item5: item5,
        price: price,
        price2: price2,
        price3: price3,
        price4: price4,
        price5: price5
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
          <h4>{item}</h4>
          <strong>${price}</strong>
        </div>
        <div className="product_info">
          <h4>{item2}</h4>
          <strong>${price2}</strong>
        </div>
        <div className="product_info">
          <h4>{item3}</h4>
          <strong>${price3}</strong>
        </div>
        <div className="product_info">
          <h4>{item4}</h4>
          <strong>${price4}</strong>
        </div>
        <div className="product_info">
          <h4>{item5}</h4>
          <strong>${price5}</strong>
        </div>
      </div>
    </>
  );
}

export default Specialty;
