import React from 'react'
import { StyledLoadMoreBtn } from '../StyledComponents/StyledLoadMoreBtn'
import PropTypes from 'prop-types'

const LoadMoreBtn = ({ callback }) => (
  <StyledLoadMoreBtn>
    <button onClick={callback}> LOAD ALL </button>
  </StyledLoadMoreBtn>
)

LoadMoreBtn.propTypes = {
  callback: PropTypes.func
}

export default LoadMoreBtn
