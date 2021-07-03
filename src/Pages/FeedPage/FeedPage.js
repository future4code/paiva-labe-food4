import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenContainer, MainContainerFeed, HeaderFeed } from "./styled";
import Footer from "../../components/Footer/Footer";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToMenu } from "../../Routes/coordinator";
import RestCard from "../../components/RestCard/RestCard";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 6px 4px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '280px',
    height: '40px',
    marginBottom: '10vh',
    marginTop: '1px'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 6,
  },
  iconButton: {
    padding: 5,
  },
}));

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()
  const getRestaurants = useRequestData(`${BASE_URL}/restaurants`, []);

  const onClickCard = () => {
    goToMenu(history)
  }


  const restaurantsMap = getRestaurants && getRestaurants.restaurants && getRestaurants.restaurants.map((restaurant) => {
    return (
      <RestCard
        restaurant={restaurant}
        key={restaurant.id}
        name={restaurant.name}
        image={restaurant.logoUrl}
        time={restaurant.deliveryTime}
        shipping={restaurant.shipping}
        onClick={() => onClickCard(restaurant.id)}
      />
    )
  })

  const classes = useStyles();

  return (
    <ScreenContainer>
      <HeaderFeed>
        <div>
          <p>Rappi4</p>
          <hr />
        </div>
      </HeaderFeed>
      <MainContainerFeed>
        <div>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder={"Restaurante"}
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </div>
        {restaurantsMap}

      </MainContainerFeed>
      <Footer />
    </ScreenContainer>
  );
};

export default FeedPage;