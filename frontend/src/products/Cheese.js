import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";

function Cheese({
  id,
  title,
  item,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  price,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
  price8,
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
        item6: item6,
        item7: item7,
        item8: item8,
        price: price,
        price2: price2,
        price3: price3,
        price4: price4,
        price5: price5,
        price6: price6,
        price7: price7,
        price8: price8,
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
        <div className="product_info">
          <h4>{item6}</h4>
          <strong>${price6}</strong>
        </div>
        <div className="product_info">
          <h4>{item7}</h4>
          <strong>${price7}</strong>
        </div>
        <div className="product_info">
          <h4>{item8}</h4>
          <strong>${price8}</strong>
        </div>
      </div>
    </>
  );
}

export default Cheese;
