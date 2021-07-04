import React from 'react'
import { LogoBoard, ScreenContainer, MainContainer } from './styled'
import LogoColored from '../../assets/LogoRappi4Colored.svg'
import SignupForm from './SignupForm'
import Header from '../../components/Header/Header'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const SignupPage = () => {
    //useUnprotectedPage()

    return (
        <ScreenContainer>
            <Header />
            <MainContainer>
                <LogoBoard src={LogoColored} alt="logo Rappi4" />
                <SignupForm />
            </MainContainer>
        </ScreenContainer>
    )
}

export default SignupPage
