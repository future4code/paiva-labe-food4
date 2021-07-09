import React from 'react'
import { DetailsContainer, ContainerImg, StyledImg, ContentContainer, ContentContainer2, BuyContainer, BuyImg, BlockContainer, TitleContainer, BuyContent, ContentContainer3 } from './styled';
import { Button } from '@material-ui/core';

const RestCardDetails = () => {
  return (
    <DetailsContainer>
      <BlockContainer>
        <ContainerImg>
          <StyledImg src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/565EE547-D291-4716-BAD0-2779E0E9B5EC.png" />
        </ContainerImg>

        <ContentContainer>
          <p>Bullger Vila Madalena</p>
        </ContentContainer>

        <ContentContainer2>
          <p>Burger</p>
        </ContentContainer2>

        <ContentContainer2>
          <p>50-60 min</p>
          <p>Frete R$6,00</p>
        </ContentContainer2>

        <ContentContainer2>
          <p>Rua Fradique Coutinho, 1136 - Vila Madalena</p>
        </ContentContainer2>
      </BlockContainer>

      <TitleContainer>
        <p>Principais</p>
        <hr />
      </TitleContainer>

      <BuyContainer>
        <BuyImg src="https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/7597624B-447F-4DD9-A341-A05D8CD464A7.png" />
        <BuyContent>
          <ContentContainer>
            <p>Bullger</p>
          </ContentContainer>

          <ContentContainer2>
            <p>Pão com pão</p>
          </ContentContainer2>

          <ContentContainer3>
            <p>R$23,00</p>
            <Button variant="outlined" size="small" color="primaryColor">adicionar</Button>
          </ContentContainer3>
        </BuyContent>
      </BuyContainer>
    </DetailsContainer>
  )
}

export default RestCardDetails
