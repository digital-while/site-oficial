import styled from "styled-components";

import image from "../../assets/fundo-digital-while.jpg";

export const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

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
`;

export const BannerContent = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
`;

export const BoxCenter = styled.div`
  height: 30vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
