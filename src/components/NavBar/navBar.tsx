import {Link} from "react-router-dom"
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";
import { StyledHeader } from "../header/style";
import { StyledNavbar } from "./style";

export default function NavBar() {
    const { userInfo } = useContext(UserContext)
    return (
        <>
            <StyledHeader>
                <StyledNavbar>
                    <img className="logo" src={userInfo.logo} alt="logo da empresa" />
                    <ul className="boxNavOptions">
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/admin">Admin</Link>
                        </li>
                        <li>
                            <Link to="/">Sair</Link>
                        </li>
                    </ul>
                </StyledNavbar>
            </StyledHeader>
        </>

    )
}