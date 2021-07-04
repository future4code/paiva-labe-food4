import React from "react";
import { LogoBoard, RectanguleArea } from "./styled";
import Logo from "../../assets/LogoRappi4.svg";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SplashPage = () => {
  //useUnprotectedPage()

  return (
    <RectanguleArea>
      <LogoBoard src={Logo} alt="logo Rappi4" />
    </RectanguleArea>
  );
};

export default SplashPage;
