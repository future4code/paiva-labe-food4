import React from 'react'

import { ContentContainer, ScreenContainer, MainContainerFeed, ContainerImg } from './styled'
import { StyledImg } from './styled'
import  Header  from '../Header/Header'
const RestCard = (props) => {


  return (

<ScreenContainer>
  <Header/>
    <MainContainerFeed>
     <ContainerImg>
  <StyledImg src= {props.image}></StyledImg>
  </ContainerImg>
  <ContentContainer>
  <p>{props.name}</p>
  </ContentContainer>
  <ContentContainer>
  
   <p>Frete R$:{props.shipping},00</p>
   </ContentContainer>
   
   </MainContainerFeed>
  </ScreenContainer>
  )
}

export default RestCard