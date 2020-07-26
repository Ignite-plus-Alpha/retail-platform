import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import image from "../../assets/alpha.png";
import Search from "../search/search.component";

export const Header = () => (
  <div className="header">
    <Link to="/" className="logo-conainer">
      <img
        src={image}
        alt="logo"
        style={{ height: "50px", marginLeft: "70px" }}
      />
    </Link>
    <Search />
    <div className="options">
      <Link to="/contact" className="option">
        <b>CONTACT</b>
      </Link>
      <Link to="/aboutus" className="option">
        <b>ABOUT US</b>
      </Link>
      <Link to="/cart" className="option icon">
        <i className="fa fa-shopping-cart  fa-lg"></i>
      </Link>
      <Link to="/profile" className="option">
        <i className="fa fa-user  fa-lg"></i>
      </Link>
      <Link to="/wishlist" className="option">
        <i className="fa fa-heart fa-lg"></i>
      </Link>

    </div>
  </div>
);
