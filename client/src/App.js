import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pageComponents/Home';
import Products from './components/pageComponents/Products';
import Admin from './components/Admin';
import Login from './components/pageComponents/Login';
import SignUp from './components/SignUp';
import AddProduct from './components/pageComponents/AddProduct';
import RemoveProduct from './components/pageComponents/RemoveProduct';
import UpdateProduct from './components/pageComponents/UpdateProduct';
import ProductViewPage from './components/pageComponents/ProductViewPage';
import Checkout from './components/pageComponents/Checkout';
import Orders from './components/pageComponents/Orders';


function App() {



  return (
    <div className="App">
      {/* <Home /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/removeproduct' element={<RemoveProduct />} />
        <Route path='/updateproduct' element={<UpdateProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/productviewpage' element={<ProductViewPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>

    </div>
  );
}

export default App;
