import styled from "styled-components";

export const StyledProductPage = styled.div`
  /* Height deve ser igual a 100vh - vh da navbar */
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .div--presentation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 20vh;
    padding-left: 6rem;

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }
`;
