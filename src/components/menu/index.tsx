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
import {
    FaBars,
    FaTimes,
    FaAngleDown,
} from "react-icons/fa";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { userInfo } = useContext(UserContext);

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["has__sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
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
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        Sobre nós
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={toggleSubmenu} className={boxClassSubMenu.join(' ')}>
                        Produtos <FaAngleDown />
                    </MenuItemLink>
                    <SubMenu open={isMenuSubMenu}> 
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                Social Media
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                Gestão de tráfego
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                Design
                            </MenuItemLink>
                        </MenuItem>
                        <MenuItem>
                            <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                                Sites
                            </MenuItemLink>
                        </MenuItem>
                    </SubMenu>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        Contatos
                    </MenuItemLink>
                </MenuItem>
                <MenuItem>
                    <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        Atualizações
                    </MenuItemLink>
                </MenuItem>
            </Menu>
        </Wrapper>
    </Container>
    </>
    );
};

export default Navbar;
