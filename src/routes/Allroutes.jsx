import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductDetail, ProductsList } from '../pages';
import Checkout from '../pages/Checkout/Checkout';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};
