import React from 'react';
import { ScreenContainer } from './styled';
import SignupAddForm from './SignupAddForm';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

const SignupAddPage = () => {
    //useUnprotectedPage()

    return (
        <ScreenContainer>
            <SignupAddForm />
        </ScreenContainer>
    )
}

export default SignupAddPage;
