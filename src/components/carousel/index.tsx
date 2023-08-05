import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

import { StyledCarousel } from "./styled";
import { iCustomCarouselProps } from "../../interfaces/components";

export const CustomCarousel = ({
  itemList,
  maxItens,
}: iCustomCarouselProps) => {
  //Configurações do carrosel
  const [activeItem, setActiveItem] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setActiveItem(selectedIndex);
  };
  const limit = maxItens || 3;
  const listItens = itemList || [];

  return (
    <Carousel
      as={StyledCarousel}
      className="ul--carousel"
      interval={null}
      activeIndex={activeItem}
      onSelect={handleSelect}
    >
      {
        // eslint-disable-next-line array-callback-return
        listItens.map((item, index, itemArray) => {
          if (!(index % limit)) {
            const page = () => {
              let list = [];

              for (let i = index; i < index + limit; i++) {
                if (i < itemArray.length) {
                  list.push(itemArray[i]);
                } else {
                  i = index + limit;
                }
              }

              return list;
            };
            return (
              <Carousel.Item as={"li"} key={index}>
                <div className="div--wrapper-itens">{page()}</div>
              </Carousel.Item>
            );
          }
        })
      }
    </Carousel>
  );
};
