import { useContext, useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { CiSearch } from 'react-icons/ci';
import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { CartContext } from '../../pages/Cart/Context/CartContext';

export const Header = () => {
  const { cartList } = useContext(CartContext);

  const [cartItemNumber, setCartItemNumber] = useState(cartList.length);
  useEffect(() => {
    setCartItemNumber(cartList.length);
  }, [cartList]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="ShopMaster Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shopmaster
            </span>
          </Link>
          <div className="flex items-center relative">
            <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search">
              <CiSearch />
            </span>
            <Link
              to="/cartCheckout"
              className="text-gray-700 dark:text-white mr-5"
            >
              <span className="text-2xl bi bi-cart-fill relative">
                {' '}
                <FaCartArrowDown />
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartItemNumber}
                </span>
              </span>
            </Link>

            <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white">
              <BsPersonCircle />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
