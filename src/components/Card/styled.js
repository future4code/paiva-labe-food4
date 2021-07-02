import styled from "styled-components";

export const RestCardContainer = styled.div`
  width: 250px;
  height: 36vh;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 8px;
  box-shadow: 0 3px 6px 0 #b8b8b8;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  padding-bottom: 0px;
`;

export const StyledImg = styled.img`
  height: 140px;
  width: 77.5vw;
  border-top-left-radius: 8px;
  border-top-right-radius:8px;
  margin: 0 0 0px;
  padding: 0;
`;

export const ContentContainer = styled.div`  
  height: 6vh;
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items:center;
  color: #E86E5A;
  padding-left:10px;
  margin: 2px 16px 4px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif; 
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const ContentContainer2 = styled.div`  
  height: 6vh;
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items:center;
  color: #b8b8b8;
  padding-left:8px;
  font-family: 'Roboto', sans-serif; 
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  margin: 4px 8px 4px 16px;
`;
