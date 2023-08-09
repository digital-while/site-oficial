import styled from "styled-components";

export const StyledCarousel = styled.ul`
  margin-bottom: auto;
  width: 100%;
  height: 60vh;

  a[class^="carousel-control"] {
    width: 5%;
  }

  .carousel-indicators {
    height: 5%;
    margin: 0 auto;
  }

  .carousel-inner {
    width: 90%;
    height: 95%;
    margin: auto;
  }

  .div--wrapper-itens {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-height: 90%;
  }
`;
