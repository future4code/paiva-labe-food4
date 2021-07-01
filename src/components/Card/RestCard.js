import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { StyledCardContent, RestCardContainer } from './styled'

const RestCard = (props) => {

  return (
    <RestCardContainer onClick={props.onClick}>
      <CardActionArea>
        <CardMedia
          component={'img'}
          alt={"logo"}
          height={'150px'}
          image={props.restaurant.logoUrl}
        />
        <StyledCardContent>
          <Typography align={'center'}>
            {props.restaurant.name.toUpperCase()}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
    </RestCardContainer>
  )
}

export default RestCard