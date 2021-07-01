import { createGlobalStyle } from 'styled-components';
import { primaryColor } from '../constants/colors';

const GlobalStyle = createGlobalStyle`
 *{
   /* background-color: ${primaryColor}; */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;