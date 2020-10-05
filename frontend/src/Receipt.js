import React from "react";
import "./App.css";
import "./orders/style.css";
import moment from "moment";
import MenuList from "./orders/MenuList";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import orderData from "./orders/orderData";
import { auth } from "firebase";

function Receipt() {
  const [menuData, changeMenuData] = React.useState(orderData);
  const history = useHistory();
  const [{ user }] = useStateValue();
  const timestamp = new Date().getUTCMilliseconds();
  const tempDate = new Date();
  const date =
    tempDate.getMonth() +
    1 +
    "-" +
    tempDate.getDate() +
    "-" +
    tempDate.getFullYear() +
    "-" +
    tempDate.getHours() +
    ":" +
    tempDate.getMinutes() +
    ":" +
    tempDate.getSeconds();
  const currDate = "Date: " + date;

  const cartItems = (() =>
    menuData
      .map((menu) => menu.data)
      .reduce((p, n) => [...p, ...n], [])
      .filter((item) => item.count > 0))();

  const totalPrice = cartItems
    .map(({ value, count }) => Number(value) * count)
    .reduce((p, n) => p + n, 0)
    .toFixed(2);

    function refreshPage() {
      window.location.reload(false);
    }

  return (
    <div className="receipt">
      <h1>Your Receipt</h1>
      <p>Thank you for your order {user?.email}.</p>
      <p>Your pizza will be available for pickup in 20 minutes.</p>
      <div className="shop-menu">
        <section className="container content-section">
          <div className="order_time">
            <h4>Order #{timestamp}</h4>
            <h4 className="date">{currDate}</h4>
          </div>
          <table className="cart">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ITEM</th>
                <th scope="col">QTY</th>
                <th scope="col">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length ? (
                cartItems.map(({ label, value, count }, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{label}</td>
                    <td>{count}</td>
                    <td>${(value * count).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4}>
                    The cart is empty. Sign in and place an order.
                  </td>
                </tr>
              )}
              <tr>
                <th colSpan={3}>Total</th>
                <th>${totalPrice}</th>
              </tr>
            </tbody>
          </table>
          <div onClick={refreshPage} className="cv-btn">
            <Link to="/">Return Home</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Receipt;
