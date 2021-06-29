import { Link } from "@material-ui/core";
import React from "react";
import {
  ScreenContainer,
  LogoBoard,
  MainContainer,
  SignUpDiv,
} from "./styled";
import LogoColorida from "../../assets/LogoRappi4Colored.svg";
import { goToSignUp } from "../../Routes/coordinator";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  
  return (
    <ScreenContainer>
      <MainContainer>
        <LogoBoard src={LogoColorida} alt="logo Rappi4" />
        <LoginForm />
        <SignUpDiv>
          <p>Não possui cadastro?<Link onClick={() => goToSignUp(history)} variant="body2">
            {"Cadastre-se"}
          </Link></p>
        </SignUpDiv>
      </MainContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
