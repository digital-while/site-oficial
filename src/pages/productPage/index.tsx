import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { StyledProductPage } from "./style";
import { UserContext } from "../../contexts/userContext";
import NavBar from "../../components/menu";
import { iProductCategory } from "../../interfaces/user";
import { ProductCard } from "../../components/productCard";
import { CustomCarousel } from "../../components/carousel";

export const ProductPage = () => {
  const navigate = useNavigate();
  const { product } = useParams();
  const { userInfo } = useContext(UserContext);
  const [findProduct, setFindProduct] = useState<
    iProductCategory | undefined
  >();

  //Trocar a Key = index para Key = id
  const productHtmlList = findProduct?.productList.map((item, index) => (
    <ProductCard product={item} key={index} />
  ));

  //Checar se a categoria de produto existe
  useEffect(() => {
    const productClass = userInfo.controlPanel.productEdit.find(
      (productCategory) => productCategory.urlName === product
    );
    setFindProduct(productClass);
    if (!productClass) {
      navigate("/error");
    }
  }, [product]);

  return (
    <>
      <NavBar />
      {findProduct && (
        <StyledProductPage className="container">
            <h2>{findProduct.title}</h2>
            <p className="h6">{findProduct.description}</p>
          <CustomCarousel itemList={productHtmlList} />
        </StyledProductPage>
      )}
    </>
  );
};
