import React from 'react'
import { ScreenContainer, MainContainerFeed } from '../../components/Screens/ScreenContainers'
import RestCardDetails from "../../components/RestCardDetails/RestCardDetails"
import Header from "../../components/Header/Header"

const MenuPage = () => {
    return (
        <ScreenContainer>
            <Header />
            <MainContainerFeed>
                <RestCardDetails />
            </MainContainerFeed>
        </ScreenContainer>
    )
}

export default MenuPage
