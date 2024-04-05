import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import CartContextComponent from "./store/cart-context.jsx";

function App() {
  
  return (
    <CartContextComponent>
      <Header/>
      <Shop/>
    </CartContextComponent>
  );
}

export default App;
