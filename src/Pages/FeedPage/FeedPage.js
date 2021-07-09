import React, { useContext, useState, useEffect } from "react";
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenContainer, MainContainerFeed, HeaderFeed } from "./styled";
import Footer from "../../components/Footer/Footer";
import RestCard from "../../components/RestCard/RestCard";
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { getRestaurants } from "../../services/restaurant";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import SearchBox from "../../components/SearchBox/SearchBox";

const FeedPage = () => {
  useProtectedPage();

  const history = useHistory();
  const [filteredCategoryRestaurants, setFilteredCategoryRestaurants] = useState([]);
  const { restaurants, currentCategory, setRestaurants } = useContext(GlobalStateContext);

  const restaurantsList = restaurants && restaurants.map((restaurant) => {
    return (
      <RestCard
        key={restaurant.id}
        name={restaurant.name}
        title={restaurant.title}
        deliveryTime={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        image={restaurant.logoUrl}
        history={history}
        id={restaurant.id}
      />
    );
  });

  const filter = () => {
    if (restaurants && restaurants.length > 0) {
      const filtered = restaurants.filter((restaurant) => {
        return restaurant.category.includes(currentCategory);
      });
      setFilteredCategoryRestaurants([...filtered]);
    }
  };

  const filteredRestaurantsList = filteredCategoryRestaurants.map(
    (restaurant) => {
      return (
        <RestCard
          key={restaurant.id}
          name={restaurant.name}
          deliveryTime={restaurant.deliveryTime}
          image={restaurant.logoUrl}
          history={history}
          id={restaurant.id}
        />
      );
    }
  );

  const clearFilter = () => {
    setRestaurants([]);
  };

  useEffect(() => {
    getRestaurants(setRestaurants);
    filter();
    clearFilter();
  }, [currentCategory]);

  return (
    <ScreenContainer>
      <HeaderFeed>
        <div>
          <p>Rappi4</p>
          <hr />
        </div>
      </HeaderFeed>
      <MainContainerFeed>
        <SearchBox />
        <CategoriesBar />
        {
          restaurants && restaurants.length !== 0 ?
            <div>
              {filteredRestaurantsList.length > 0
                ? filteredRestaurantsList
                : restaurantsList}
            </div>
            : <p>Carregando...Por favor, aguarde</p>
        }
      </MainContainerFeed>
      <Footer />
    </ScreenContainer>
  );
};

export default FeedPage;