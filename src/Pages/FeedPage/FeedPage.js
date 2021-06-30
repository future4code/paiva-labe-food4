import React from "react";

// import useProtectedPage from '../../hooks/useProtectedPage'
import {
  ScreenContainer,
  MainContainerFeed,
} from "../../components/Screens/ScreenContainers";
import { Header } from "../../components/Header/Header";
const FeedPage = () => {
  // useProtectedPage()
  //
  return (
 
    <ScreenContainer>
        <Header>
            <p>Rappi4</p>
        </Header>
      <MainContainerFeed>
         
       
      </MainContainerFeed>
    </ScreenContainer>
  );
};

export default FeedPage;
