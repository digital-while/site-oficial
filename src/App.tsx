import { Routes, Route } from "react-router-dom";
import { BodyBack, Container } from "./style";
import Dashboard from "./pages/dashboard";
import Menu from "./pages/menu";
import Admin from "./pages/admin";
import ErrorPage from "./pages/error";
import { ProductPage } from "./pages/productPage";
import "./style.ts";
import UserProvider from "./contexts/userContext";

import GlobalStyle from "./styles/global/style";
/* import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; */

function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <Container>
          <BodyBack>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/product" element={<ErrorPage />} />
              <Route path="/product/:product" element={<ProductPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BodyBack>
        </Container>
      </UserProvider>
    </>
  );
}

export default App;
