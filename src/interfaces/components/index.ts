import { iProduct } from "../user";

export interface iProductCardProps {
  product: iProduct;
}

export interface iStyledProductCardProps {
  blocked?: boolean;
}

//Alterar tipagem
export interface iCustomCarouselProps {
  itemList?: JSX.Element[];
  maxItens?: number;
}
