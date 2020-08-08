import styled from 'styled-components'

export const StyledGrid = styled.div`
  max-width: 60%;
  margin: 0 auto;
  text-align: center;
  padding: 200px 20px 0 20px;


    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
`

export const StyledGridContent = styled.div`
width: 70%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  place-items: center;
  justify-content: center;
  grid-gap: 50px;
  margin: 100px 0;



  }

  @media screen and (max-width: 400px) {
    width: 100%;
  }


  @media screen and (max-width: 1000px) {
    width: 80%;
  }

`
