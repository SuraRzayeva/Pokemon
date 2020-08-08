import React from 'react'
import { Link } from 'react-router-dom'
import { StyledHeaderLogo } from '../StyledComponents/StyledHeaderLogo'
import Logo from '../Images/logo.svg'

const HeaderLogo = () => (
  <StyledHeaderLogo>
    <Link to="/">
      <img src={Logo} alt="" />
    </Link>
  </StyledHeaderLogo>
)

export default HeaderLogo
