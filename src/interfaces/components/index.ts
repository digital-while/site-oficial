import { iProduct } from "../user";
import { iEmployee } from "../user";

export interface iProductCardProps {
  product: iProduct;
}

export interface iStyledProductCardProps {
  blocked: boolean;
  backview: boolean;
}

//Alterar tipagem
export interface iCustomCarouselProps {
  itemList?: JSX.Element[];
  maxItens?: number;
}

export interface iEmployeeCardProps {
  employee: iEmployee;
}
