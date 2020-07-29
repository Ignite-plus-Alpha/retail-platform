import "./cart.styles.scss";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Axios from "axios";
import Card from "./cart.card";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

export default class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("userId"),
      cartId: localStorage.getItem("cartId"),
      cartItems: [],
      total_price: 0,
      total_quantity: 0,
    };
    this.getCartItems = this.getCartItems.bind(this);
    this.updateCartItems = this.updateCartItems.bind(this);
  }

  componentDidMount = () => {
    console.log("User Found");
    console.log(this.props.cartId);
    {
      this.getCartItems();
    }
  };

  getCartItems = () => {
    Axios.get(`http://localhost:8081/cartItem/${this.state.cartId}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          cartItems: response.data.cartItems,
          total_price: response.data.total_price,
          total_quantity: response.data.total_quantity,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  updateCartItems(item) {
    var i = this.state.cartItems.indexOf(item);
    var cartItems = this.state.cartItems;
    cartItems.splice(i, 1);
    this.setState({ cartItems: cartItems });
  }

  render() {
    if (this.state.total_quantity === 0)
      return (
        <div>
          <center>
            <img src="https://www.scholarswing.in/resources/images/empty-cart.png" />
            <h1>
              OOPS nothing found in your cart!!! <br />
              Add Items
              <br />
              <Link to="/">SHOP HERE</Link>
            </h1>
          </center>
        </div>
      );
    return (
      <div className="ItemTable">
        <br></br>
        <Typography variant="h5" component="h2" style={{ marginBottom: "2%" }}>
          Shopping Cart
        </Typography>
        {this.state.cartItems.map((item, index) => (
          <Card key={index} item={item} getCartItems={this.getCartItems} />
        ))}
        <h1>Total Price:₹{this.state.total_price}</h1>
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => console.log("proceed to payment")}
        >
          CHECKOUT
        </Button>
      </div>
    );
  }
}
