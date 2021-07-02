import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const StyledImg = styled.img`
  height: 120px;
  width: 75vw;
  border-radius: 5px;
`;

export const ScreenContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);
`;

export const MainContainerFeed = styled.div`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(55, 99, 122, 0.2);

`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid black;
  border-radius: 5px;
`;
export const ContentContainer = styled.div`
  padding-top: 10px;
  height: 10vh;
  width:75vw;
  display: flex;
  flex-direction: row;
  border: 1px solid red;
`;
