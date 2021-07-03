import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ScreenContainer, MainContainerFeed } from '../../components/Screens/ScreenContainers'
import RestCardDetails from '../../components/RestCardDetails/RestCardDetails'
import Header from '../../components/Header/Header'

const MenuPage = () => {
    useProtectedPage()

    return (
        <ScreenContainer>
            <Header/>
        <MainContainerFeed>
        <RestCardDetails/>
        </MainContainerFeed>
        </ScreenContainer>
    )
}

export default MenuPage
