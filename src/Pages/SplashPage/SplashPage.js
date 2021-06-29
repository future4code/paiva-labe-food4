import React from 'react'
import { ScreenContainer, LogoBoard, RectanguleArea } from './styled'
import Logo from '../../assets/LogoRappi4.svg'

const SplashPage = () => {
    return (
        <ScreenContainer>
            <RectanguleArea>
                <LogoBoard src={Logo} alt="logo Rappi4" />
            </RectanguleArea>
        </ScreenContainer>
    )
}

export default SplashPage

