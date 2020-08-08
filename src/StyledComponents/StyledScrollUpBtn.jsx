import Styled from 'styled-components'

export const StyledScrollUpBtn = Styled.div`
.go-up {
  width: 50px;
  max-width: 50px;
  min-width: 50px;
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #3C5AA6;
  border: 3px solid #FFCB05;
  position: fixed;
  right: 5%;
  bottom: 5%;
display: flex;
justify-content: center;
align-items: center;
transition: .3s ease all;
animation: scrollAnim .5s forwards ease;
  svg{
width: 18px;
    fill:  #FFCB05;
    transform: rotate(90deg);
  }

}


@keyframes scrollAnim {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

`
