import React, { Component } from "react";
import "./App.css";

class State extends Component {
  state = {
    orders: [],
    order: {
      FirstName: 'First Name',
      LastName: 'Last Name'
    }
  };

  componentDidMount() {
      this.getOrders();
  }

getOrders = _ => {
    fetch('http://localhost:4000/order')
    .then(response => response.json())
    .then(response => this.setState({ orders: response.data }))
    .catch(err => console.log(err))
}

addOrder = _ => {
  const { order } = this.state; 
  fetch(`http://localhost:4000/order/add?FirstName=${order.FirstName}&LastName=${order.LastName}`)
  .then(this.getOrders)
  .catch(err => console.error(err))
}



  renderOrders = ({ UserId, FirstName, LastName}) => (
  <div key={UserId}>{FirstName} {LastName}</div>
  );

  render() {
    const { orders, order } = this.state;
    return (
      <div className="state">
        {orders.map(this.renderOrders)}

        <div>
          <input
            value={order.FirstName}
            onChange={(e) =>
              this.setState({ order: { ...order, FirstName: e.target.value } })
            }
          />
          <input
            value={order.LastName}
            onChange={(e) =>
              this.setState({ order: { ...order, LastName: e.target.value } })
            }
          />
          <button onClick={this.addOrder}>Add Order</button>
        </div>
      </div>
    );
  }
}

export default State;
