import React from "react";

const MenuItem = (item) => {
  const {
    choice: { withImage, count = 0, label, value, img },
    onChange = () => alert("No function"),
  } = item;

  const handleClick = (addToCard) => onChange(addToCard, item);

  return (
    <div className="shop-item">
      <div className="shop-details d-flex justify-content-between">
        <span>{label}</span>
        <div className="d-flex ml-1">
          <span className="shop-item-price">
            ${value} x <strong>{count}</strong>
          </span>
          <button
            className="btn btn-primary remove ml-1"
            onClick={handleClick.bind(null, false)}
            disabled={count === 0}
          >
            -
          </button>
          <button
            onClick={handleClick.bind(null, true)}
            className="btn btn-primary add ml-1"
          >
            +
          </button>
        </div>
      </div>
      {withImage && <img src={img} />}
    </div>
  );
};

export default MenuItem;
