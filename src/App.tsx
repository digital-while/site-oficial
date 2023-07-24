import { Routes, Route } from "react-router-dom";
import { Container } from "./style";
import Dashboard from "./pages/dashboard";
import Menu from "./pages/menu";
import Admin from "./pages/admin";
import ErrorPage from "./pages/error";
/* import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; */

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;