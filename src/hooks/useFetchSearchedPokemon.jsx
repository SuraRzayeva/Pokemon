import { useState, useEffect } from 'react'
import Axios from 'axios'

export const FetchSearchedPokemon = searchedTerm => {
  const [searchedPokemon, setSearchedPokemon] = useState(null)
  const [searchedLoading, setLoading] = useState('')
  const [searchedError, setError] = useState(false)

  useEffect(() => {
    if (searchedError) {
      setTimeout(() => {
        setError(false)
      }, 1800)
    }
  }, [searchedError])

  const fetchSearchedFuntion = async endpoint => {
    setLoading(true)
    setError(false)
    try {
      const response = await Axios.get(endpoint)
      setSearchedPokemon(response.data)
      console.log(response.data)
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  return [{ searchedPokemon, searchedLoading, searchedError }, fetchSearchedFuntion]
}
