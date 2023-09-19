import styled from "styled-components";

export const StyledMenuPage = styled.section`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vw;
  padding-top: 15vh;
  gap: 1.5rem;

  h1 {
    text-align: center;
  }

  .ul--team {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 100%;
    gap: 2rem;
  }
`;
