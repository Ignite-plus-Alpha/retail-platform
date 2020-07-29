import "./cart.styles.scss";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./cart.styles.scss";
import { withRouter } from "react-router-dom";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: "auto",
    maxWidth: 700,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

class Cart extends Component {
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
        console.log(this.state.cartItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  updateQuantity(itemId, itemSize, itemQuantity, operation) {
    alert("updating");
    if (operation === 1) itemQuantity = itemQuantity + 1;
    else itemQuantity = itemQuantity - 1;
    console.log(localStorage.getItem("cartId"), itemId, itemSize, itemQuantity);
    Axios.put(
      `http://localhost:8081/cartItem/${localStorage.getItem(
        "cartId"
      )}/${itemId}/${itemSize}/${itemQuantity}`
    )
      .then((response) => {
        console.log(response.data);
        this.setState({ item: response.data });
        this.getCartItems();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteItem(itemId, itemSize) {
    alert("deleting");

    Axios.delete(
      `http://localhost:8081/cartItem/${localStorage.getItem(
        "cartId"
      )}/${itemId}/${itemSize}`
    )
      .then((response) => {
        console.log(response.data);
        this.getCartItems();
      })
      .catch((e) => {
        console.log(e);
      });
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
    const { classes } = this.props;
    return (
      <div className="ItemTable">
        <br></br>
        <Typography variant="h5" component="h2" style={{ marginBottom: "2%" }}>
          Shopping Cart
        </Typography>
        {this.state.cartItems.map((item) => (
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="complex"
                      src={item.itemImageURL}
                      onClick={() => {
                        this.props.history.push(
                          `/${item.itemGroup}/${item.itemCategory}/${item.itemId}`
                        );
                      }}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1">
                        {item.itemTitle}
                      </Typography>
                      <Typography gutterBottom>
                        {item.itemGroup} {item.itemCategory}
                      </Typography>
                      <Typography>{item.itemId.toLowerCase()}</Typography>
                      <Typography>
                        Size:{item.itemSize.toUpperCase()}
                      </Typography>
                      <Typography>
                        <IconButton
                          aria-label="increase quantity"
                          onClick={() => {
                            if (item.itemQuantity < 10)
                              this.updateQuantity(
                                item.itemId,
                                item.itemSize,
                                item.itemQuantity,
                                1
                              );
                            else alert("not allowed.reached maximum");
                          }}
                        >
                          <AddIcon />
                        </IconButton>
                        {item.itemQuantity}
                        <IconButton
                          aria-label="decrease quantity"
                          onClick={() => {
                            if (item.itemQuantity === 1)
                              this.deleteItem(item.itemId, item.itemSize);
                            else
                              this.updateQuantity(
                                item.itemId,
                                item.itemSize,
                                item.itemQuantity,
                                0
                              );
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Typography
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          alert("remove");
                          this.deleteItem(item.itemId, item.itemSize);
                        }}
                      >
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      ₹{item.itemPrice * item.itemQuantity}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            <br />
          </div>
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

export default withStyles(styles)(withRouter(Cart));
