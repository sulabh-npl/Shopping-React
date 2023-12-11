import CategoriesContextProvider from "./Contexts/CategoriesContextProvider";
import NavBar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import CategoriesPage from "./CategoriesPage";
import SingleProductPage from "./SingleProductPage";
function App() {
  return (
    <Router>
      <CategoriesContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/categories/:name" element={<CategoriesPage />} />
        </Routes>
      </CategoriesContextProvider>
    </Router>
  );
}

export default App;
