import React from 'react'
import { StyledErrorMessage } from '../StyledComponents/StyledErrorMessage'
import PropTypes from 'prop-types'

const FlashMessage = ({ text, opacity }) => {
  return (
    <StyledErrorMessage>
      <div style={{ opacity: opacity }} className="error-message">
        {text}
      </div>
    </StyledErrorMessage>
  )
}

FlashMessage.propTypes = {
  text: PropTypes.string,
  opacity: PropTypes.number
}

export default FlashMessage
