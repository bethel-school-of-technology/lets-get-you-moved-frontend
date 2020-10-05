import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";

function Size({
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
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  price,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
  price8,
  price9,
  price10,
  price11,
  price12,
  price13,
  price14,
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
        item9: item9,
        item10: item10,
        item11: item11,
        item12: item12,
        item13: item13,
        item14: item14,
        price: price,
        price2: price2,
        price3: price3,
        price4: price4,
        price5: price5,
        price6: price6,
        price7: price7,
        price8: price8,
        price9: price9,
        price10: price10,
        price11: price11,
        price12: price12,
        price13: price13,
        price14: price14,
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
      </div>
    </>
  );
}

export default Size;
