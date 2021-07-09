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
            <div> <HomeOutlinedIcon onClick={() => goToFeed(history)} /></div>

            <div><ShoppingCartOutlinedIcon onClick={() => goToCart(history)} /></div>

            <div><PersonOutlineOutlinedIcon onClick={() => goToProfile(history)} /></div>

        </Foot>
    )
}

export default Footer
