import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FetchPokemons } from '../hooks/useFetchPokemons'
import { FetchSearchedPokemon } from '../hooks/useFetchSearchedPokemon'
import { StyledPokedexPokemons } from '../StyledComponents/StyledPokedexPokemons'
import Grid from './Grid'
import Card from './Card'
import PropTypes from 'prop-types'
import LoadMoreBtn from './LoadMoreBtn'
import SearchBar from './SearchBar'
import Loading from './Loading'
import FlashMessage from './FlashMessage'
import ScrollUpBtn from './ScrolUpBtn'

const PokedexPokemons = () => {
  const [{ pokemon, loading, error }, fetchFunction] = FetchPokemons()
  const [{ searchedPokemon, searchedLoading, searchedError }, fetchSearchedFuntion, setSearchedError] = FetchSearchedPokemon()
  const [allLoaded, setAllLoaded] = useState(false)
  const [thisLoading, setThisLoading] = useState(false)

  const [searchedTerm, setSearchedTerm] = useState('')

  const fetchPokemons = input => {
    setThisLoading(true)
    if (input) {
      setSearchedTerm(input)
      const link = `https://pokeapi.co/api/v2/pokemon/${input}`
      fetchSearchedFuntion(link)
    } else {
      setSearchedError(true)
    }
    setThisLoading(false)
  }

  const loadMorePokemon = () => {
    setThisLoading(true)
    fetchFunction(`https://pokeapi.co/api/v2/pokemon?limit=300`)
    setAllLoaded(true)
    setSearchedTerm('')
    setThisLoading(false)
  }

  if (loading || searchedLoading || thisLoading) {
    return <Loading />
  }

  if (allLoaded && !pokemon && !searchedPokemon) {
    return <Loading />
  }

  if (searchedError) {
    return (
      <StyledPokedexPokemons>
        <SearchBar callback={fetchPokemons} />
        <FlashMessage text="Ups...There is no pokemon with that name or id number." opacity={searchedError ? 1 : 0} />
      </StyledPokedexPokemons>
    )
  }

  if (searchedPokemon) {
    return (
      <StyledPokedexPokemons>
        <SearchBar callback={fetchPokemons} />

        <div onClick={() => document.location.reload()} className="svg">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
          </svg>
        </div>
        <Grid>
          <Link to={`/pokemons/${searchedPokemon.name}`}>
            <Card key={searchedPokemon.id} name={searchedPokemon.name} id={searchedPokemon.id} />
          </Link>
        </Grid>
      </StyledPokedexPokemons>
    )
  }

  return (
    <StyledPokedexPokemons>
      <SearchBar callback={fetchPokemons} />
      {searchedError ? <FlashMessage text="Ups...There is no pokemon with that name or id number." opacity={searchedError ? 1 : 0} /> : null}
      <Grid>
        {pokemon.results.map((p, index) => (
          <Link key={index + 2} to={`/pokemons/${p.name}`}>
            <Card key={index} name={p.name} id={index + 1} url={p.url} />
          </Link>
        ))}
      </Grid>
      {!allLoaded && <LoadMoreBtn callback={loadMorePokemon} />}

      <ScrollUpBtn />
    </StyledPokedexPokemons>
  )
}

PokedexPokemons.propTypes = {
  input: PropTypes.string
}
export default PokedexPokemons
