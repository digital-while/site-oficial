import React, { useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  SubMenu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./style";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { userInfo } = useContext(UserContext);

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["has__sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  return (
    <>
      <Container>
        <Wrapper>
          <LogoContainer>
            <img className="logo" src={userInfo.logo} alt="logo da empresa" />
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                href="/menu"
              >
                Sobre nós
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                onClick={toggleSubmenu}
                className={boxClassSubMenu.join(" ")}
              >
                Produtos <FaAngleDown />
              </MenuItemLink>
              <SubMenu open={isMenuSubMenu}>
                {userInfo.controlPanel.productEdit.map((product, index) => {
                  return (
                    <MenuItem>
                      <MenuItemLink
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href={`/product/${product.urlName}`}
                      >
                        {product.title}
                      </MenuItemLink>
                    </MenuItem>
                  );
                })}
              </SubMenu>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                href="/"
              >
                Contatos
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                href="/"
              >
                Atualizações
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default NavBar;
