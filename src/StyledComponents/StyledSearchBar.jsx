import Styled from 'styled-components'

export const StyledSearchBar = Styled.div`

margin: auto;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


.title {
  text-align: center;
  color: #3C5AA6;
  text-transform: uppercase;
}

form {
  width: 350px;
  height: 50px;
  position: relative;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
  input {
height: 100%;
    width: 100%;
    border-style: none;
    border-radius: 50px;
   text-align: center;
    }

    input:focus {
      outline: none;
      border: 1px solid #FFCB05;
    }

    input:focus::placeholder {
      opacity: 0;
    }

    button {
      position: absolute;
      right: 0;
      top: 0;
      border-style: none;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: #3C5AA6;
      border: 3px solid #FFCB05;
     transition: .3s all ease-in-out;
      animation: btnAnimate 1s forwards ease;
      cursor: pointer;
      img {
        width: 70%;
      }
    }
}

@media screen and (max-width: 450px) {
  width: 80%;
  form {
    width: 100%;
input {
  width: 100%;
}
  }

  .title {
    font-size: 12px;
    margin-bottom: 15px;
    padding-bottom: 0;
    margin-top: 50px;
  
    h1 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
}

@keyframes btnAnimate {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

`
