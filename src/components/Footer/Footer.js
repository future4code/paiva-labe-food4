import React from 'react';
import { Foot } from './styled';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { goToFeed, goToCart, goToProfile } from '../../Routes/coordinator';
import { useHistory } from 'react-router-dom';


const Footer = () => {
    const history = useHistory();
    return (
        <Foot>
            <HomeOutlinedIcon onClick={() => goToFeed(history)}/>
            <ShoppingCartOutlinedIcon onClick={() => goToCart(history)}/>
            <PersonOutlineOutlinedIcon onClick={() => goToProfile(history)}/>
        </Foot>
    )
}

export default Footer
