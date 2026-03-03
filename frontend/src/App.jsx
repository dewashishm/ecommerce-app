import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Products from './Pages/Products/Products.jsx';
import Login from './Pages/Login_and_Register/Login.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import Register from './Pages/Login_and_Register/Register.jsx';
import Terms from './Pages/Terms_and_Conditions/Terms.jsx';
import ProductPage from './Pages/ProductPage/ProductPage.jsx';
import CartPage from "./Pages/Cart/CartPage.jsx"

function App() {
  return (
    <>
    <div>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/login/register' element={<Register />} />
        <Route path='/login/register/terms-and-conditions' element={<Terms />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/products/:_id" element={<ProductPage />} />

        <Route path="/cart" element= {<CartPage />}/>
    
    </Routes>
      <Footer />

    </div>

    </>

  );
};

export default App;
