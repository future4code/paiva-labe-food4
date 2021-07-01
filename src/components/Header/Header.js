import React from 'react'
import { Head } from './styled';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import { useHistory } from 'react-router-dom';
import { goBack } from '../../Routes/coordinator';


const Header = () => {
    const history = useHistory();
    return (
        <Head>
            <ArrowBackIosOutlinedIcon onClick={() => goBack(history)}/>
        </Head>
    )
}

export default Header
