import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./Routes/Login";
import ShopPage from "./Routes/Shop";
import CartPage from "./Routes/Cart";
import CheckoutPage from "./Routes/Checkout";
import ThanksPage from "./Routes/Checkout/ThanksPage";
import CMSPage from "./Routes/Cms";
import CMSProductsPage from "./Routes/Cms/Products";
import Navbar from "./Components/Core/Navbar";
import Footer from "./Components/Footer";
import CMSOrderPage from "./Routes/Cms/Orders";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='page'>
        <Routes>
          <Route path='shop' element={<ShopPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='thankyou' element={<ThanksPage />} />
          <Route path='cms' element={<CMSPage />}>
            <Route path='products' element={<CMSProductsPage />} />
            <Route path='orders' element={<CMSOrderPage />} />
            <Route index element={<Navigate to='products' />} />
          </Route>

          <Route path='*' element={<Navigate to='shop' />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
