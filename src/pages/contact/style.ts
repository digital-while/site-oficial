import styled from "styled-components";
import image from "../../assets/fundo-digital-while.jpg";

export const StyleContactPage = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #000;
    opacity: 0.7;
  }

  .div--stamp {
    height: 200px;
    width: 200px;
    max-height: 20vh;
    max-width: 20vw;
    position: absolute;
    bottom: 5%;
    left: 5%;

    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 100%;
    }
  }

  .div--content {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;

    h2 {
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 2.25rem;
    }

    a {
      background-color: var(--whiteFixed);
      color: var(--blue1);
      font-weight: 700;

      &:hover {
        color: var(--blue4);
        border-color: var(--blue1);
      }
    }
  }
`;
