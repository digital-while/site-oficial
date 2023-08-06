import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  img {
    max-height: 56px;
    @media screen and (max-width: 960px) {
      max-height: 40px;
    }
  }
`;

export const Menu = styled("ul")<{open: boolean}>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  gap: 4px;

  @media screen and (max-width: 960px) {
    background-image: linear-gradient(black,#050A30);
    position: absolute;
    top: 0;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const SubMenu = styled("ul")<{open: boolean}>`

  display: ${({ open }) => (open ? "block" : "none")};

  @media screen and (min-width: 960px) {
    position: absolute;
    margin-top: 8px;
    left: -24px;
    max-width: 300px;
    min-width: 200px;
    border: 1px solid #0b17688f;
    z-index: 1000;
  }
`;

export const MenuItem = styled.li`
  position: relative;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    background-color: #0b17688f;
    transition: 0.5s all ease;
  }

  &.sub__menus__Active {
    svg {
      transform: rotate(180deg);
    }

    @media screen and (min-width: 960px) {
      background-color: #0b17688f;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    z-index: 1;

    svg {
      fill: #006cec;
      margin-right: 0.5rem;
      width: 26px;
      height: 26px;
    }
  }
`;
