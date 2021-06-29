import styled from "styled-components"
import { primaryColor } from "../../constants/colors"


export const RectanguleArea = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 43vh 20vw 25vw;
  background-color: ${primaryColor}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const LogoBoard = styled.img`
  width: 60vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`