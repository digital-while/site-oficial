import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

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
          <ul className="ul--product">
            {findProduct.productList.map((item, index) => (
              <ProductCard product={item} key={index} />
            ))}
          </ul>
        </StyledProductPage>
      )}
    </>
  );
};
