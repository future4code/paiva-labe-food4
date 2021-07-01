import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper'
import useProtectedPage from '../../hooks/useProtectedPage'
import {
  ScreenContainer,
  MainContainerFeed,
} from "../../components/Screens/ScreenContainers";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToMenu } from "../../Routes/coordinator";
import RestCard from "../../components/Card/RestCard";



const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 6px 4px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    marginBottom: '80vh',
    marginTop: '5px'
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
  const restaurants = useRequestData([],`${BASE_URL}/restaurants`)

  const onClickCard = (id) => {
    goToMenu (id)
  }

  const restaurantsCards = restaurants.map((restaurant) => {
    return(
      <RestCard
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
      <MainContainerFeed>
        <Header>
          <p>Rappi4</p>
        </Header>
        <Paper component="form" className={classes.root}>
          <InputBase>
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
          </InputBase>

          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        {restaurantsCards}
        <Footer />
      </MainContainerFeed>
    </ScreenContainer>
  );
};

export default FeedPage;