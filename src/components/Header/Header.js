import React from 'react'
import { Head } from './styled';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../Routes/coordinator';
import { HeaderMenu } from './styled'


const Header = () => {
    const history = useHistory();
    return (
        <Head>
            <ArrowBackIosOutlinedIcon onClick={() => goBack(history)}/>
            <HeaderMenu><p>Restaurantes</p></HeaderMenu>
        </Head>
    )
}

export default Header
