import './Cart.css'; // Import the CSS file for styling
import { CartModal } from "./components/CartModal";
const Cart = () => {


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <CartModal />
    </div>
  );
};

export default Cart;
