import NavBar from "../../components/menu";
import { StyleContactPage } from "./style";
import carimbo from "../../assets/carimbo.png";

export default function Contact() {
  return (
    <>
      <NavBar />
      <StyleContactPage>
        <div className="div--content">
          <h2 className="h1">Fale com a gente</h2>
          <p className="h6">Como podemos ajudar sua empresa?</p>
          <a href="#" className="btn">
            Entrar em contato
          </a>
        </div>
        <div className="div--stamp">
          <img src={carimbo} alt="Digital While" />
        </div>
      </StyleContactPage>
    </>
  );
}
