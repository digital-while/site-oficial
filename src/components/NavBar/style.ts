import styled from "styled-components";

export const StyledNavbar = styled.nav`
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    .logo{
        object-fit: contain;
        width: 10vw;
        height: 5vh;
    }

    .boxNavOptions{
        width: 40%;
        height: 100%;
        background-color: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
    }
`;