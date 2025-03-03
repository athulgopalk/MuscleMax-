import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/MobileNavbar"; 
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignUP from "./pages/LoginSignUp";
import Footer from "./components/Footer/Footer";
import supplements_banner from "./assets/Frontend_Assets/banner_supplements.jpg";
import accessories_banner from "./assets/Frontend_Assets/banner_gears.jpg";
import snacks_banner from "./assets/Frontend_Assets/banner-fitfoods.jpg";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <BrowserRouter>
        {isMobile ? <MobileNavbar /> : <Navbar />} 
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/supplements"
            element={
              <ShopCategory
                category="supplements"
                banner={supplements_banner}
              />
            }
          />
          <Route
            path="/gears&accessories"
            element={
              <ShopCategory
                category="accessories"
                banner={accessories_banner}
              />
            }
          />
          <Route
            path="/fitfoods"
            element={<ShopCategory category="snacks" banner={snacks_banner} />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUP />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
