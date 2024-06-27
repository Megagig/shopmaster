import { Route, Routes } from 'react-router-dom';
import { HomePage, ProductDetail, ProductsList } from '../pages';
import Checkout from '../pages/Checkout/Checkout';
import CartCheckout from '../pages/Cart/components/CartCheckout';
import OrderPage from '../pages/Order/OrderPage';


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<OrderPage />} />


        
        
        
        <Route path="/cartCheckout" element={<CartCheckout />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
