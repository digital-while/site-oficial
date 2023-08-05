import { iProductCardProps } from "../../interfaces/components";
import { StyledProductCard } from "./style";

export const ProductCard = ({ product }: iProductCardProps) => {
  return (
    <StyledProductCard blocked={product.blocked}>
      <div className="div--img">
        <img src={product.img} alt="Uma imagem" />
      </div>
      <div className="div--text">
        <h3>{product.name}</h3>
        <p>{product.littleDescription}</p>
      </div>
    </StyledProductCard>
  );
};
