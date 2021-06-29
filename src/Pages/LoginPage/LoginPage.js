import { Link } from "@material-ui/core";
import React from "react";
import {
  ScreenContainer,
  LogoBoard,
  MainContainer,
  SignUpDiv,
} from "./styled";
import LogoColorida from "../../assets/LogoRappi4Colored.svg";
import SignupPage from "../SignupPage/SignupPage";
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
          <p>Não possui cadastro?<Link href="#" onClick={SignupPage} variant="body2">
            {"Cadastre-se"}
          </Link></p>
        </SignUpDiv>
      </MainContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
