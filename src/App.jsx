import './App.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { CartProvider } from './pages/Cart/Context/CartContext';
import { AllRoutes } from './routes/Allroutes';

function App() {
  return (
    <div>
      <CartProvider >
        <Header />
        <AllRoutes />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
