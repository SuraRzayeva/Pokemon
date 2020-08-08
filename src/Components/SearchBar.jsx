import React, { useState, useRef, useEffect } from 'react'
import { StyledSearchBar } from '../StyledComponents/StyledSearchBar'
import Search from '../Images/search.svg'
import { FetchSearchedPokemon } from '../hooks/useFetchSearchedPokemon'

import FlashMessage from './FlashMessage'

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('')
  const [error, setError] = useState(false)
  const timeOut = useRef(null)

  const updateState = event => {
    const input = event.target.value
    setError(false)
    clearTimeout(timeOut.current)
    setState(input)
  }

  const submitForm = e => {
    e.preventDefault()
    if (state) {
      callback(state)
    } else {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 1800)
    }
  }

  return (
    <StyledSearchBar>
      <div className="title">
        <h1>Let's catch them all! </h1>
      </div>
      <form onSubmit={submitForm} action="">
        <input placeholder="Search pokemons by name or ID" onChange={updateState} type="text" value={state} />
        {state ? (
          <button>
            <img src={Search} alt="" />
          </button>
        ) : null}
      </form>

      <FlashMessage text="Gotcha! You didn't write anything in the input field.   " opacity={error ? 1 : 0} />
    </StyledSearchBar>
  )
}

export default SearchBar
