import styled, { css } from "styled-components";
import { iStyledProductCardProps } from "../../interfaces/components";

export const StyledProductCard = styled.div<iStyledProductCardProps>`
  height: 100%;
  /*width: 25%;*/

  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    perspective: 1000px;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    ${
      //Caso seja um produto bloqueado
      ({ blocked }) =>
        blocked &&
        css`
          border: 1px solid red;
          .flip-card-front, .flip-card-back {
            opacity: 0.4;
          }
        `
    }
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #111;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.3;
    }

    .flip-card-desc {
      padding: 16px;
      position: absolute;
      bottom: 0;
    }
  }
  
  .flip-card-back {
    background-color: #111;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px;
    overflow-y: scroll;
  }

  .text{
    height: 100%;
  }
`;
