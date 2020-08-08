import React, { useState, useEffect } from 'react'
import { StyledPokemonInfoCard } from '../StyledComponents/StyledPokemonInfoCard'
import Loading from './Loading'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Credit from './Credit'

const PokemonInfoCard = ({ name, id, text, color, habitat, type, hp, japanese, attack, defense, spa, spd, speed }) => {
  if (!id) {
    console.log(typeof text)
    console.log(typeof type)
    console.log(type)
    return <Loading />
  }

  return (
    <StyledPokemonInfoCard pokemon_color={color}>
      <Link to="/">
        <div className="svg">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
          </svg>
        </div>
      </Link>

      <div className="card">
        <div className="id">{id}</div>
        <div className="img-div">
          <div className="back-circle">
            {' '}
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt="" />
          </div>
        </div>
        <div className="description-div">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <p className="text">{text} </p>

          <p className="japan">
            {' '}
            Its Japanese name is {japanese == name && 'also'} {japanese}.
          </p>
          <div className="details">
            <div className="type">
              <p className="title">Type:</p>
              <p className="type-text">{type}</p>
            </div>
            <div className="color">
              <p className="title"> Color:</p>
              <p className="color-text">{color}</p>
            </div>
            <div className="habitat">
              <p className="title">Favorite habitat: </p>
              <p className="habitat-text">{habitat}</p>
            </div>
          </div>

          <div className="stats">
            <div className="hp">
              <div className="title">HP</div>
              <div style={{ width: hp.base_stat + 50 }} className="scale scale-hp"></div>
            </div>
            <div className="attack">
              <div className="title">Attack</div>
              <div style={{ width: attack.base_stat + 50 }} className="scale scale-a"></div>
            </div>
            <div className="defense">
              <div className="title">Defense</div>
              <div style={{ width: defense.base_stat + 50 }} className="scale scale-d"></div>
            </div>
            <div className="special-attack">
              <div className="title">Special attack</div>
              <div style={{ width: spa.base_stat + 50 }} className="scale scale-sa"></div>
            </div>
            <div className="special-defense">
              <div className="title">Special defense</div>
              <div style={{ width: spd.base_stat + 50 }} className="scale scale-sd"></div>
            </div>
            <div className="speed">
              <div className="title">Speed</div>
              <div style={{ width: speed.base_stat + 50 }} className="scale scale-s"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledPokemonInfoCard>
  )
}

PokemonInfoCard.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  color: PropTypes.string,
  habitat: PropTypes.string,
  type: PropTypes.string,
  hp: PropTypes.object,
  japanese: PropTypes.string,
  attack: PropTypes.object,
  defense: PropTypes.object,
  spa: PropTypes.object,
  spd: PropTypes.object,
  speed: PropTypes.object
}

export default PokemonInfoCard
