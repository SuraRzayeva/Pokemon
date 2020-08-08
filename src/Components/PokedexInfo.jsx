import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Axios from 'axios'
import PokemonInfoCard from './PokemonInfoCard'

const PokedexInfo = () => {
  const [state, setState] = useState({ stats: [] })
  const [pokemon, setPokemon] = useState({ color: '', habitat: '', base_happiness: '', names: { 0: {}, 1: {} } })
  const { name } = useParams()
  const [textInfo, setTextInfo] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    const theRequest = Axios.CancelToken.source()
    const fetchPokemon = async () => {
      try {
        const result = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${result.data.id}`, { cancelToken: theRequest.token })

        setTextInfo(response.data.flavor_text_entries[20].flavor_text)
        setPokemon(response.data)
        setState(result.data)
        setType(result.data.types[0].type.name)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()

    return () => {
      theRequest.cancel()
    }
  }, [])

  if (state && type && textInfo && pokemon) {
    return <PokemonInfoCard hp={state.stats[0]} attack={state.stats[1]} defense={state.stats[2]} spa={state.stats[3]} spd={state.stats[4]} speed={state.stats[5]} habitat={pokemon.habitat.name} color={pokemon.color.name} text={textInfo} weight={state.weight} type={type} japanese={pokemon.names[1].name} name={state.name} id={state.id} />
  }

  return <Loading />
}

export default PokedexInfo
