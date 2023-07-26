import logo from "../../assets/w.png"
import {Link} from "react-router-dom"
import "./style.css"

export default function NavBar() {

    return (
        <>
            <header>
                <img src={logo} alt="logo da empresa" />
                <nav>
                    <Link to="/menu">Menu</Link>
                    <Link to="/admin">Admin</Link>
                    <Link to="/">Sair</Link>
                </nav>
            </header>
        </>

    )
}