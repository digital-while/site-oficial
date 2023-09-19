import { BannerWrapper, BannerContent, BoxCenter } from "./styles";

const BannerWithTextButton = () => {
  return (
    <>
    <BannerWrapper className="text-center">
        <BannerContent>
            <h1 className="mb-16">Digital While</h1>
            <p className="h6 mb-36">Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.</p>
            <BoxCenter className="class-box">
              <a href="https://whatsapp.com/channel/0029Va3uqwGL2ATqaK89230u" target="_blank" className="btn btn-blue">Canal de Noticias</a>
              <a href="https://api.whatsapp.com/send?phone=5527992044443&text=Ol%C3%A1,%20vim%20do%20site%20e%20tenho%20interesse%20em%20seus%20produtos!" target="_blank" className="btn btn-blue">WhatsApp Business</a>
              <a href="https://www.instagram.com/digitalwhile.ofc" target="_blank" className="btn btn-blue">Instagram</a>
            </BoxCenter>
        </BannerContent>
    </BannerWrapper>
    </>
  );
};

export default BannerWithTextButton;
