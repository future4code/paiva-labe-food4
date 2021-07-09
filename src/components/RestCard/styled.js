import styled from "styled-components";

export const RestCardContainer = styled.div`
  width: 77.5vw;
  height: 220px;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 12px;
  //box-shadow: 0 3px 6px 0 #b8b8b8;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  padding-bottom: 0px;
`;

export const StyledImg = styled.img`
  height: 150px;
  width: 77vw;
  border-top-left-radius: 8px;
  border-top-right-radius:8px;
  margin: 0 0 0px;
  padding: 0;
`;

export const ContentContainer = styled.div` 
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items:center;
  color: #E86E5A;
  padding-left:10px;
  padding-top:2px;
  margin: 2px 16px 4px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif; 
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  padding-bottom:1px;
`;

export const ContentContainer2 = styled.div` 
  
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items:center;
  color: #b8b8b8;
  padding-top:2px;
  padding-left:7px;
  padding-bottom:1px;
  font-family: 'Roboto', sans-serif; 
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  margin: 4px 8px 4px 16px;
`;