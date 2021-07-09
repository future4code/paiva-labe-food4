import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import { ContentContainer, ContainerImg, ContentContainer2, RestCardContainer } from './styled'
import { goToMenu } from "../../Routes/coordinator";
import { StyledImg } from './styled'

const RestCard = (props) => {
  const history = useHistory();

  return (
    <RestCardContainer >
      <Link onClick={() => goToMenu(history)}>
        <ContainerImg>
          <StyledImg src={props.image}></StyledImg>
        </ContainerImg>
      </Link>
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