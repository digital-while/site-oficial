import styled from "styled-components";

export const StyledEmployeeCard = styled.li`
  .div--img {
    height: 7.5rem;
    width: 7.5rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .p--name {
    text-align: center;
    font-size: 1.5rem;
  }

  .p--occupation {
    text-align: center;
    font-size: 0.75rem;
  }
`;
