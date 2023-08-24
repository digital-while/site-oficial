import styled, { css } from "styled-components";
import { iStyledProductCardProps } from "../../interfaces/components";

export const StyledProductCard = styled.div<iStyledProductCardProps>`
  height: 50vh;
  width: 25%;

  .card--inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    width: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    border: 1px solid black;
    ${
      //Caso seja um produto bloqueado
      ({ blocked }) =>
        blocked &&
        css`
          border: 1px solid red;
        `
    }

    > div {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
    }
  }

  ${
    //Animação para flipar o card
    ({ backview }) =>
      backview &&
      css`
        .card--inner {
          transform: rotateY(180deg);
        }
      `
  }

  .card--front {
    .div--img {
      height: 50%;
      width: 100%;
      img {
        /* ALTERAR PARA ENCAIXAR A IMAGEM */
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    .div--text {
      height: 50%;
      padding: 1rem;
    }
  }

  .card--back {
    transform: rotateY(180deg);
    padding: 1rem;
    height: 100%;
    align-items: center;
  }
`;
