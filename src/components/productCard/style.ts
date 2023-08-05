import styled, { css } from "styled-components";
import { iStyledProductCardProps } from "../../interfaces/components";

export const StyledProductCard = styled.div<iStyledProductCardProps>`
  border: 1px solid black;

  ${
    //Caso seja um produto bloqueado
    ({ blocked }) =>
      blocked &&
      css`
        border: 1px solid red;
      `
  }

  height: 50vh;
  width: 25%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .div--img {
    height: 50%;

    img {
      /* ALTERAR PARA ENCAIXAR A IMAGEM */
      height: 100%;
    }
  }

  .div--text {
    height: 50%;
    padding: 1rem;
  }
`;
