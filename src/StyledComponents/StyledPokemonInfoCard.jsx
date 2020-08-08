import Styled from 'styled-components'

export const StyledPokemonInfoCard = Styled.div`

width: 100vw;

display: flex;
flex-direction: column;
margin: 90px 0;
align-items: center;
background-color: #adebd3;
justify-content: space-between;
position: relative;


.svg {
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
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 40px;
  svg{
width: 18px;
    fill:  #FFCB05;
  }
}

.card {
  width: 70%;
  border-radius: 30px;
  box-shadow:  10px 10px 30px #93c8b3, -10px -10px 30px #c7fff3;
display: flex;
align-items: center;
position: relative;
padding: 50px 50px 50px 0;

.id {
  position: absolute;
  top: 0;
  right: 3%;
  font-size: 70px;
  font-weight: 900;
  text-shadow:  5px 5px 5px #93c8b3, -5px -5px 5px rgba(199, 255, 243, 0.8);
 color: #adebd3;
}

.img-div {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .back-circle {
    min-width: 200px;
    max-width: 350px;
    max-height: 350px;
    min-height: 200px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(5px 5px 10px rgba(0,0,0,.2));


  }
  .back-circle::before {
    content: "";
    display: block;
    padding-bottom: 100%;
 
  }
  img {
    width: 90%;
    z-index: 20;
   }

   @media screen and (max-width: 1100px) {

    .back-circle {
      margin: 50px 0;
    }
  }
}




.description-div {
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
   

  .title {
    width: 100%;
    display: flex;
    flex-direction: column;
   
    h1 {
      text-transform: capitalize;
      align-self: center;
      text-align: center;
      color: #1c1c1c;
      margin:0;
      padding: 0;
    }


  }

  .text {

font-size: 16px;
line-height: 1.4;
  margin-bottom: 0;
  }

  .japan {
    font-size: 16px;
  }


  @media screen and (max-width: 500px) {


    .text, p {
      font-size: 15px;
    }

}


 
  .details {
 
    width: 80%;

    display: flex;
    text-transform: capitalize;
    justify-content: space-between;

  p {
    padding: 0;
    margin:0;
  }

  .title {
    font-weight:600;
    margin-bottom: 8px;
  }


  
  @media screen and (max-width: 500px) {

      .title, p {
        font-size: 12px;
      }

  }
   }

   @media screen and (max-width: 500px) {
    .details {
      margin-top: 30px;
    }
   }

   .stats {
     width: 100%;
     margin-top: 30px;
    display: flex;
    flex-direction: column;
    grid-gap: 5px;


     .title {
      font-weight:600;
      width: 38%;

     }

     .hp, .attack, .defense, .special-attack, .special-defense, .speed {
       width: 100%;
       height: 20px;
       display: flex;
       align-items: center;
       border-radius: 50px;
     
     }

     .scale {
       border-radius: 50px;
       height: 60%;
       box-shadow:  5px 5px 5px #93c8b3, -5px -5px 5px rgba(199, 255, 243, 0.9);
       background: #adebd3;
     }

   }

   @media screen and (max-width: 500px) {

    .stats {
      grid-gap: 20px;
      margin-top: 50px;

      .title {
        font-size: 12px;
      }
    }

  }
  }



@media screen and (max-width: 1200px) {

  .description-div {
    width: 90%;
    position: relative;
  }
}
}

@media screen and (max-width: 1200px) {
  .card {
    flex-direction: column;
    padding-right: 0;
  }
}

@media screen and (max-width: 600px) {
  .card {
   width: 90%;
  }
}


`
