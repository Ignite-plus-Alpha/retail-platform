import React from "react";
import Cart from "./cart";
import { Redirect, withRouter } from "react-router-dom";
import Axios from "axios";

class CartDirectory extends React.Component {
  componentDidMount = () => {
    if (localStorage.getItem("userId")) {
      this.getUserCartId();
    }
  };

  getUserCartId = () => {
    Axios.get(`http://localhost:8081/cart/${localStorage.getItem("userId")}`)
      .then((response) => {
        localStorage.setItem("cartId", response.data.cartId);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    if (!localStorage.getItem("userId")) return <Redirect to="/signup" />;
    else
      return (
        <div>
          <Cart key={localStorage.getItem("userId")} />
        </div>
      );
  }
}
export default withRouter(CartDirectory);
