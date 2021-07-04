import React, { useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([])
  const [restaurantDetail, setRestaurantDetail] = useState({})
  const [cart, setCart] = useState([])
  const [currentCategory, setCurrentCategory] = useState("")
  const [totalValue, setTotalValue] = useState(0)

  const data = {
    cart,
    restaurants,
    restaurantDetail,
    currentCategory,
    totalValue,
    setCart,
    setRestaurants,
    setRestaurantDetail,
    setCurrentCategory,
    setTotalValue
  }

  return <GlobalStateContext.Provider value={data}>
    {props.children}
  </GlobalStateContext.Provider>
};

export default GlobalState;