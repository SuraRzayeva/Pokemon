import Styled from 'styled-components'

export const StyledCard = Styled.div`

width: 180px;
height: 300px;

background: #adebd3;
display: flex;
flex-direction: column;
justify-content: center;
aligh-items: center;
transition: .3s all ease;
cursor: pointer;
position: relative;
border-radius: 30px;
box-shadow:  10px 10px 30px #93c8b3, -10px -10px 30px #c7fff3;
animation: cardAnim 1s forwards ease;
margin: 30px;

.back-circle {
  width: 150px;
  height: 150px;
  position: absolute;
  background: white;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
}


  
  img {
   width: 150px;
   position: absolute;
   top: 50%;
   left:50%;
   transform: translate(-50%, -50%); 
   transform-origin: center;
   transform-box: fill-box;

  }

h1 {
  font-size: 18px;
  position: absolute;
  bottom: 2px;
  text-align: center;
  left:50%;
  transform: translate(-50%, -50%); 
  color: #1c1c1c;
}

h3 {
  font-size: 12px;
  position: absolute;
  bottom: 30px;
  text-align: center;
  left:50%;
  transform: translate(-50%, -50%); 
  color: #1c1c1c;
}

:hover {
  transform: scale(1.1);
}

@keyframes cardAnim {
  0% {
    opacity:0;
  }

  100% {
    opacity: 1;
  }
}


`
