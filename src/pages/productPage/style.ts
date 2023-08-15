import styled from "styled-components";

export const StyledProductPage = styled.div`
  /* Height deve ser igual a 100vh - vh da navbar */
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .div--presentation {
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 0 1rem;

    h1 {
      font-size: 2.4rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;
