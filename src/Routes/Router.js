import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import SignupAddPage from "../Pages/SignupAddPage/SignupAddPage";
import FeedPage from "../Pages/FeedPage/FeedPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import CartPage from "../Pages/CartPage/CartPage";

const Router = () => {
    return (
        <BrowserRouter>
       <Switch>
           <Route exact path="/login" name={LoginPage}/>
           <Route exact path="/signup" name={SignupPage}/>
           <Route exact path="/signupadd" name={SignupAddPage}/>
           <Route exact path="/feed" name={FeedPage}/>
           <Route exact path="/menu" name={MenuPage}/>
           <Route exact path="/profile" name={ProfilePage}/>
           <Route exact path="/cart" name={CartPage}/>
       </Switch>
       </BrowserRouter>
    )
}

export default Router
