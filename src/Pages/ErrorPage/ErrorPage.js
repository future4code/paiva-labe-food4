import React from 'react';
import hamburger from "../../img/hamburger.gif";
import { ErrorContainer, ScreenContainer } from "./styled";
import { useHistory } from 'react-router-dom';
import useUnprotectedPage from "../../hooks/useUnprotectedPage"

const ErrorPage = () => {
    //useUnprotectedPage();
    const history = useHistory();
    const handleClick = () => history.push("/");

    return (
        <ScreenContainer>
            <ErrorContainer align="center">
                <img src={hamburger} alt="Hamburger" />
                <p>Página não encontrada! Erro 404</p>
                <button type="button" onClick={handleClick}>VOLTAR</button>
            </ErrorContainer>
        </ScreenContainer>

    )
}

export default ErrorPage;