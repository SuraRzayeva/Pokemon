import Styled from 'styled-components'

export const StyledCredit = Styled.div`

transform: rotate(-90deg);
position: fixed;
left: -3%;
bottom: 12%;


@media screen and (max-width: 650px) {
  left: -13%;
} 

@media screen and (max-width: 420px) {
  position: absolute;
} 

`
