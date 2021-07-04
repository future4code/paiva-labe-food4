import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content:center;
`;

export const ErrorContainer = styled.div`
   width: 40rem; 
   display: flex; 
   flex-direction: column;
   align-items: center;
   justify-content:center;
   margin-top: 10rem;  
   img{
       width:22rem;
       height:16rem;
   } 
   p{
     text-align:center;  
     color:#E86E5A;    
     font-weight:bolder; 
     margin:16px; 
     font-size:20px;   
   }
   button{   
     display:flex;
     align-items: center;  
     color:#FFFFFF;   
     font-weight:bold;
     background-color:#E86E5A;
     border-radius:16px; 
     border: none;    
     width:5.3rem;
     height:0.8rem;     
     margin: 0.5rem auto; 
     padding:0.9rem;  
   }     
`
