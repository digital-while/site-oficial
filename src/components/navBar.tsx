import logo from "../resource/w.png"

export default function NavBar() {

    return (
        <>
            <header>
                <img src={logo} alt="logo da empresa" />
                <nav>
                    <button>
                        Serviços
                    </button>
                    <button>
                        Contatos
                    </button>
                    <button>
                        Atualizações
                    </button>
                </nav>
            </header>
        </>

    )
}