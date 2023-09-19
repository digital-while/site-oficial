import styled from "styled-components";

export const StyledCarousel = styled.ul`
  margin-top: 56px;

  .div--wrapper-itens {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 20px;
  }

  .carousel-indicators {
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
  }

  .carousel-control-next,
  .carousel-control-prev {
    width: auto;
  }
`;
