import React from 'react'
import { LogoBoard, ScreenContainer, MainContainer } from './styled'
import LogoColorida from '../../assets/LogoRappi4Colored.svg'
import SignupForm from './SignupForm'

const SignupPage = () => {
    return (
        <ScreenContainer>
        <MainContainer>
            <LogoBoard src={LogoColorida} alt="logo Rappi4" />
            <SignupForm />
        </MainContainer>
        </ScreenContainer>
    )
}

export default SignupPage
