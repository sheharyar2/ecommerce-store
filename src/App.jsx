import Cart from "./Pages/Cart/Cart";
import Category from "./Pages/Category/Category";
import Product from "./Pages/Product/Product";
import Shop from "./Pages/Shop/shop";
import LoginSignup from "./Pages/loginsignup/LoginSignup";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import men_banner from  './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';

function App() {
      console.log("men banner : " ,men_banner);
  return (
    <>
       
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/men" element={<Category banner={men_banner} category="men"/>}/>
          <Route path="/women" element={<Category banner={women_banner} category="women"/>}/>
          <Route path="/kids"  element={<Category banner={kid_banner} category="kid"/>}/>
          <Route path="/products" element={<Product/>}>
             <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/login" element={<LoginSignup />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
