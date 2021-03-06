import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  user-select: none;
  background: #adebd3;
  display: flex;
  overflow-x: hidden;
}

:focus {
  outline: none;
}

}
`
