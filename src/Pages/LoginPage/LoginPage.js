import { Link } from "@material-ui/core";
import React, { useState, useEffect } from 'react';
import {
  ScreenContainer,
  LogoBoard,
  MainContainer,
  SignUpDiv,
} from "./styled";
import LogoColored from "../../assets/LogoRappi4Colored.svg";
import { goToSignUp } from "../../Routes/coordinator";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";

import SplashPage from "../SplashPage/SplashPage";


const LoginPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <ScreenContainer>
      {
        loading ?
          <SplashPage />
          :
          <MainContainer>
            <LogoBoard src={LogoColored} alt="logo Rappi4" />
            <LoginForm />
            <SignUpDiv>
              <p>Não possui cadastro? <Link onClick={() => goToSignUp(history)} variant="body2">
                {"Cadastre-se"}
              </Link></p>
            </SignUpDiv>
          </MainContainer>

      }

    </ScreenContainer>
  );
};

export default LoginPage;
