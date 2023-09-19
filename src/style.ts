import styled from "styled-components";

export const Container = styled.div`
  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: white;
  }

  button {
    cursor: pointer;
  }
`;

export const BodyBack = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(black, #050a30);
`;
