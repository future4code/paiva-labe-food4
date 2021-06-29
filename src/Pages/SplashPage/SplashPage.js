import React from "react";
import { LogoBoard, RectanguleArea } from "./styled";
import Logo from "../../assets/LogoRappi4.svg";

const SplashPage = () => {
  return (
    <RectanguleArea>
      <LogoBoard src={Logo} alt="logo Rappi4" />
    </RectanguleArea>
  );
};

export default SplashPage;
