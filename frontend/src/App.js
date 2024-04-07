import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Component/Footer/Footer";
import women from './Component/Assests/banner_women.png';
import men from './Component/Assests/banner_mens.png';
import kids from './Component/Assests/banner_kids.png'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kids} category="kid" />} />
          {/* Define a route for individual product pages */}
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
