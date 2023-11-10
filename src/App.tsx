import {
  CMSOrderPage,
  CMSPage,
  CartPage,
  CheckoutPage,
  LoginPage,
  ShopPage,
  ThanksPage,
  CMSProductPage,
} from "./Routes";
import { Navbar, Footer } from "./Components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
            <Route path='products' element={<CMSProductPage />} />
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
