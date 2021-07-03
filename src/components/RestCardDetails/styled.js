import styled from "styled-components";

export const BlockContainer = styled.div`
  height: 250px;
  width: 77.5vw;
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
  padding-bottom: 0px;
`;

export const StyledImg = styled.img`
  height: 100px;
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
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 15px;
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

export const ContentContainer3 = styled.div`  
  height: 6vh;
  width:78vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-left: 2px;
  font-family: 'Roboto', sans-serif; 
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  margin: 4px 8px 4px 16px;
`;

export const TitleContainer= styled.div`
    width:100vw;
    height:16vh;
   p{
    width:100vw;
    height:13vh;
    text-align:start;
    margin-left: 40px;
    padding-top: 48px;    
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
  width: 77.5vw;
  display: flex; 
  flex-direction: row;
  align-items: center; 
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 2rem;
`;

export const BuyImg = styled.img`
  height: 110px;
  width: 25vw;
  border-top-left-radius: 8px;
  border-top-right-radius:8px;
  margin: 0 0 0px;
  padding: 0;
  background-color: white;
`;

export const BuyContent = styled.div`
  height: 110px;
  width: 40vw;
  border-top-left-radius: 8px;
  border-top-right-radius:8px;
  margin: 0 0 0px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;