import React from 'react'

const FeedPage = () => {
    return (
        <div>FeedPage</div>
    )
}

export default FeedPage
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper'
// import useProtectedPage from '../../hooks/useProtectedPage'
import {
  ScreenContainer,
  MainContainerFeed,
} from "../../components/Screens/ScreenContainers";
import { Header } from "../../components/Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 6px 4px 15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    marginBottom: '80vh',
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
  // useProtectedPage
  //

  const classes = useStyles();

  return (
 
    <ScreenContainer>
        <Header>
            <p>Rappi4</p>
        </Header>
      <MainContainerFeed>

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
         
      </MainContainerFeed>
    </ScreenContainer>
  );
};

export default FeedPage;
