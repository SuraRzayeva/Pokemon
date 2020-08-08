import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { StyledCard } from '../StyledComponents/StyledCard'
import PropTypes from 'prop-types'

const Card = ({ name, id }) => {
  const [pokemon, setPokemon] = useState([])
  const [type, setType] = useState('')
  const [error, setError] = useState([])

  useEffect(() => {
    const theRequest = Axios.CancelToken.source()
    const fetchPokemon = async () => {
      try {
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, { cancelToken: theRequest.token })
        setType(response.data.types[0].type.name)
        setPokemon(response.data)
      } catch (error) {
        setError(true)
        console.log(error)
      }
    }

    fetchPokemon()
    return () => {
      theRequest.cancel()
    }
  }, [])

  if (!pokemon) {
    return <div> Loading </div>
  }

  return (
    <StyledCard>
      <div className="back-circle"></div>
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
      <h3> Type: {type}</h3>
      <h1> {name} </h1>
    </StyledCard>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number
}

export default Card
