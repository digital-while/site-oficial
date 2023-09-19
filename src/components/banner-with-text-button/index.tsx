import { BannerWrapper, BannerContent, BoxCenter } from "./styles";

const BannerWithTextButton = () => {
  return (
    <>
    <BannerWrapper className="text-center">
        <BannerContent>
            <h1 className="mb-16">Digital While</h1>
            <p className="h6 mb-36">Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.</p>
            <BoxCenter className="class-box">
              <a href="https://whatsapp.com/channel/0029Va3uqwGL2ATqaK89230u" className="btn btn-blue">Canal de Noticias</a>
              <a href="#" className="btn btn-blue">WhatsApp</a>
              <a href="#" className="btn btn-blue">Sobre Nós</a>
              <a href="#" className="btn btn-blue">Instagram</a>
            </BoxCenter>
        </BannerContent>
    </BannerWrapper>
    </>
  );
};

export default BannerWithTextButton;
