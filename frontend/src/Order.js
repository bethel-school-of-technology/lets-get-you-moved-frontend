import orderData from "./orders/orderData";
import MenuList from "./orders/MenuList";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./orders/style.css";
import "./App.css";
import { useHistory } from "react-router-dom";

const Order = () => {
  const [menuData, changeMenuData] = React.useState(orderData);
  const forceUpdate = React.useState()[1].bind(null, Math.random());
  const history = useHistory();
  const [{ user }] = useStateValue();

  const handleChange = (addToCard, data) => {
    const {
      id: { menuIndex, subMenu },
    } = data;
    const { count } = menuData[menuIndex].data[subMenu];
    menuData[menuIndex].data[subMenu].count = addToCard ? count + 1 : count - 1;
    changeMenuData(menuData);
    forceUpdate();
  };

  const cartItems = (() =>
    menuData
      .map((menu) => menu.data)
      .reduce((p, n) => [...p, ...n], [])
      .filter((item) => item.count > 0))();

  const totalPrice = cartItems
    .map(({ value, count }) => Number(value) * count)
    .reduce((p, n) => p + n, 0)
    .toFixed(2);

  const handlePurchase = async () => {
    const response = await fetch(
      "http://localhost:4000/order/create",
      {
        method: "POST",
        body: JSON.stringify({
          items: cartItems,
          firebaseClientId: user.uid,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { success, data } = await response.json();

    if (success) {
      history.push("/receipt");
    } else {
      // @ handle error in UI
    }
  };

  return (
    <div>
      <div className="build_page" id="home">
        <div className="container">
          <div className="row full-screen">
            <div className="home-content">
              <div className="block">
                <h1>IT'S TIME TO BUILD</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="build">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>HEY, {user?.email}! LET'S BUILD YOUR PIZZA!</h1>
              <p className='build_p'>
                ALL PIZZA WILL BE SERVED WITH OUR PATENTED ORGANIC
                RED SAUCE
              </p>
              <div className="shop-item">
                {menuData.map((menuItems, i) => (
                  <MenuList
                    {...menuItems}
                    onChange={handleChange}
                    menuIndex={i}
                    key={i}
                  />
                ))}
                <div className="shop-menu">
                  <section className="container content-section">
                    <h2 className="section-header">CART</h2>
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
                            <td colSpan={4}>The cart is empty</td>
                          </tr>
                        )}
                        <tr>
                          <th colSpan={3}>Total</th>
                          <th>${totalPrice}</th>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      className="btn btn-primary btn-purchase"
                      disabled={!Boolean(Number(totalPrice))}
                      onClick={handlePurchase}
                      type="button"
                    >
                      PURCHASE
                    </button>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
