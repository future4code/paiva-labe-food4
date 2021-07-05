import styled from "styled-components";

export const BlockContainer = styled.div`
  height: 250px;
  width: 80vw;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin: 8px;
`;

export const DetailsContainer = styled.div`
  width: 250px;
  height: 50vh;
  display: flex; 
  flex-direction: column;
  align-items: center; 
  margin: 8px;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
`;

export const StyledImg = styled.img`
  height: 100px;
  width: 80vw;
  border-top-left-radius: 8px;
  border-top-right-radius:8px; 
`;

export const ContentContainer = styled.div`  
  height: 6vh;
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items:center;
  color: #E86E5A;
  padding-left:8px;
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
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 15px;
  color: #b8b8b8;
  padding-left:4px;
  font-family: 'Roboto', sans-serif; 
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  margin: 4px 8px 4px 16px;  
`;

export const ContentContainer3 = styled.div`  
  height: 6vh;
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  //padding-left: 1px;
  font-family: 'Roboto', sans-serif; 
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  margin: 4px 8px 4px 16px;
  p{
    padding-right:0.5rem;
  }
`;

export const TitleContainer = styled.div`  
   p{
    width:100vw;
    height:13vh;
    text-align:start;
    margin-left: 58px;
    padding-top:50px;    
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;  
   }
  `;

export const BuyContainer = styled.div`
  height: 250px;
  width: 80vw;
  display: flex; 
  flex-direction: row;
  align-items: center; 
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 0.5rem;
`;

export const BuyImg = styled.img`
  height: 110px;
  width: 26vw;
  border-top-left-radius: 8px;
  border-bottom-left-radius:8px; 
`;

export const BuyContent = styled.div`
  height: 110px;
  width: 40vw;     
  display: flex;
  flex-direction: column;
`;