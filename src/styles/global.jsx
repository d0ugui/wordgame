import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    color: #e1e1e1;
    background-color: #1e1e1e;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Rubik', sans-serif;
  }
`
