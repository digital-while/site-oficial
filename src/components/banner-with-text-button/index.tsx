import { BannerWrapper, BannerContent } from "./styles";

const BannerWithTextButton = () => {
  return (
    <>
    <BannerWrapper className="text-center">
        <BannerContent>
            <h1 className="mb-16">Digital While</h1>
            <p className="h6 mb-36">Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.</p>
            <a href="#" className="btn btn-blue">Saiba mais</a>
        </BannerContent>
    </BannerWrapper>
    </>
  );
};

export default BannerWithTextButton;
