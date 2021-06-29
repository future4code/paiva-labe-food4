import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import SignupAddPage from "../Pages/SignupAddPage/SignupAddPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import CartPage from "../Pages/CartPage/CartPage";
import SplashPage from "../Pages/SplashPage/SplashPage";
import AddAddressPage from "../Pages/AddAddressPage/AddAddressPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
                <Route exact path="/signupadd" component={SignupAddPage} />
                <Route exact path="/feed" component={FeedPage} />
                <Route exact path="/menu" component={MenuPage} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/cart" component={CartPage} />
                <Route exact path="/address" component={AddAddressPage} />
                <Route exact path="/splash" component={SplashPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
