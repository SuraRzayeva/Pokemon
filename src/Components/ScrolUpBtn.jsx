import React, { useState, useEffect } from 'react'
import { useWindowScroll } from 'react-use'
import { StyledScrollUpBtn } from '../StyledComponents/StyledScrollUpBtn'

const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollX, scrollY } = useWindowScroll()
  const { y: pageYOffset } = useWindowScroll()

  useEffect(() => {
    if (pageYOffset > 200) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [pageYOffset])

  if (!isVisible) {
    return false
  }

  const scrollUp = () => {
    window.scrollTo(0, 0)
  }

  return (
    <StyledScrollUpBtn>
      <div className="go-up" onClick={scrollUp}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
        </svg>
      </div>
    </StyledScrollUpBtn>
  )
}

export default ScrollUpBtn
