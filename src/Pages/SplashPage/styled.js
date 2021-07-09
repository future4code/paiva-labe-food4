import styled from "styled-components"
import { primaryColor } from "../../constants/colors"

export const RectanguleArea = styled.div`
  width: 100rem;
  height: 100rem;
  padding: 15rem 10rem 12rem;
  background-color: ${primaryColor}; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
export const LogoBoard = styled.img`
  width: 30rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`