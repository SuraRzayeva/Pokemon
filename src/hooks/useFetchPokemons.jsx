import { useState, useEffect } from 'react'
import Axios from 'axios'

export const FetchPokemons = searchedTerm => {
  const [pokemon, setPokemon] = useState({ results: [] })
  const [loading, setLoading] = useState('')
  const [error, setError] = useState(false)

  const fetchFunction = async endpoint => {
    setLoading(true)
    try {
      const response = await Axios.get(endpoint)
      setPokemon(response.data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchFunction(`https://pokeapi.co/api/v2/pokemon?limit=30`)
  }, [searchedTerm])

  return [{ pokemon, loading, error }, fetchFunction]
}
