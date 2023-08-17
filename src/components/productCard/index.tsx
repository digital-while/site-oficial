import { useState } from "react";
import { iProductCardProps } from "../../interfaces/components";
import { StyledProductCard } from "./style";

export const ProductCard = ({ product }: iProductCardProps) => {
  const [view, SetView] = useState(false);

  const handleClick = () => {
    console.log("click");
    SetView(!view);
  };

  return (
    <StyledProductCard
      blocked={product.blocked}
      onClick={handleClick}
      backview={view}
    >
      <div className="card--inner">
        <div className="card--front">
          <div className="div--img">
            <img src={product.img} alt="Uma imagem" />
          </div>
          <div className="div--text">
            <h3>{product.name}</h3>
            <p>{product.littleDescription}</p>
          </div>
        </div>
        <div className="card--back">
          <p>{product.largeDescription}</p>
        </div>
      </div>
    </StyledProductCard>
  );
};
