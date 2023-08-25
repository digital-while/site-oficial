import styled from "styled-components";

export const StyledCarousel = styled.ul`
  margin-top: 56px;

  .div--wrapper-itens {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  .carousel-indicators {
    margin-bottom: -60px;
  }

  .carousel-control-next, .carousel-control-prev {
    width: auto;
  }
`;
