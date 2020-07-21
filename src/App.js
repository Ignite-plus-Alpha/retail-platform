import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Profile from "./pages/profile/profile.component";
import Wishlist from "./pages/wishlist/wishlist.component";
import Cart from "./pages/cart/cart.component";
import { Route, Switch } from "react-router-dom";
import { Header } from "./components/header/header.component";
import AboutUs from "./pages/AboutUs/aboutus.component";
import Signup from "./pages/signup/signup";
import { Footer } from "./components/footer/footer.components";
import CategoryPage from "./pages/category-page/category-page.component";
import ItemPage from "./pages/item-page/item-page.component";
import ProductDetailsPage from "./pages/product-details-page/product-details.component";
import SubHeader from "./components/subheader/subheader.component";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/wishlist" component={Wishlist} />
        <Route path="/signup" component={Signup} />

        
        <Route exact path="/:groupId" component={CategoryPage} />
        <Route exact path="/:groupId/:categoryId" component={ItemPage} />
        <Route exact path="/:groupId/:categoryId/:itemId" component={ProductDetailsPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
