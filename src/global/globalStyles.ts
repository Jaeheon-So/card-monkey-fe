import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
