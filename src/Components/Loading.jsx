import React from 'react'
import Gif from '../Images/gif.gif'
import { StyledLoading } from '../StyledComponents/StyledLoading'

const Loading = () => {
  return (
    <StyledLoading>
      <img className="gif" src={Gif} alt="" />
    </StyledLoading>
  )
}

export default Loading
