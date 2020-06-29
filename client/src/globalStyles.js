import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    font-family: "Open Sans Condensed";
    padding: 20px 40px;
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    /* Prevent margin and padding from effecting element size */
    box-sizing: border-box;
  }
  `;
