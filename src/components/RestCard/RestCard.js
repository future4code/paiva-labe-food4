import React from 'react'
import { ContentContainer, ContainerImg, ContentContainer2, RestCardContainer } from './styled'
import { StyledImg } from './styled'

const RestCard = (props) => {

  return (
    <RestCardContainer>
      <ContainerImg>
        <StyledImg src={props.image}></StyledImg>
      </ContainerImg>
      <ContentContainer>
        <p>{props.name}</p>
      </ContentContainer>
      <ContentContainer2>
        <p>Frete R$:{props.shipping},00</p>
      </ContentContainer2>
    </RestCardContainer>
  )
}

export default RestCard