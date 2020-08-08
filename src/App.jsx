import React from 'react'
import { GlobalStyle } from './StyledComponents/GlobalStyle'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PokedexPokemons from './Components/PokedexPokemons'
import PokedexInfo from './Components/PokedexInfo.jsx'
import HeaderLogo from './Components/HeaderLogo'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderLogo />
        <Switch>
          <Route path="/" exact>
            <PokedexPokemons />
          </Route>

          <Route path={`/pokemons/:name`}>
            <PokedexInfo />
          </Route>
        </Switch>

        <GlobalStyle />
      </BrowserRouter>
    </>
  )
}

export default App
