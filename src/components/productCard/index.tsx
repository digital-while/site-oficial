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

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
              <img src={product.img} alt={product.name} />
              <div className="flip-card-desc">
                <h3 className="h5 bold">{product.name}</h3>
                <p className="em">{product.littleDescription}</p>
              </div>
          </div>
          <div className="flip-card-back">
            <p>{product.largeDescription}</p>
          </div>
        </div>
      </div>
    </StyledProductCard>
  );
};
