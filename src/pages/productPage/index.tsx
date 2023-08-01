import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { StyledProductPage } from "./style";
import { UserContext } from "../../contexts/userContext";
import NavBar from "../../components/NavBar/navBar";
import { iProductCategory } from "../../interfaces/user";
import { ProductCard } from "../../components/productCard";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { product } = useParams();
  const { userInfo } = useContext(UserContext);
  const [findProduct, setFindProduct] = useState<
    iProductCategory | undefined
  >();

  //Configuração do carousel
  const [activeItem, setActiveItem] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setActiveItem(selectedIndex);
  };
  const maxItens = 3;

  useEffect(() => {
    const productClass = userInfo.controlPanel.productEdit.find(
      (productCategory) => productCategory.urlName === product
    );

    setFindProduct(productClass);

    if (!productClass) {
      navigate("/error");
    }
  }, []);

  //TROCAR A KEY EM ProductCard PELO ID DO PRODUTO
  return (
    <>
      <NavBar />
      {findProduct && (
        <StyledProductPage>
          <div className="div--presentation">
            <h1>{findProduct.title}</h1>
            <h2>{findProduct.description}</h2>
          </div>
          {/* <ul className="ul--product">
            {findProduct.productList.map((item, index) => (
              <ProductCard product={item} key={index} />
            ))}
          </ul> */}
          <Carousel
            as={"ul"}
            className="ul--Carousel"
            interval={null}
            activeIndex={activeItem}
            onSelect={handleSelect}
          >
            {findProduct.productList.map((item, index, productList) => {
              if (!(index % maxItens)) {
                const page = () => {
                  let list = [];

                  for (let i = index; i < index + maxItens; i++) {
                    if (i < productList.length) {
                      list.push(
                        <ProductCard product={productList[i]} key={i} />
                      );
                    } else {
                      i = index + maxItens;
                    }
                  }

                  return list;
                };
                return (
                  <Carousel.Item as={"li"}>
                    <div className="div--wrapper-itens">{page()}</div>
                  </Carousel.Item>
                );
              }
            })}
          </Carousel>
        </StyledProductPage>
      )}
    </>
  );
};
