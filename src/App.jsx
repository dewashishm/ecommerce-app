import { Routes, Route } from 'react-router-dom';
import './App.css';
import  Footer  from './Components/Footer/Footer';
import  Header from './Components/Header/Header';
import  Home  from './Pages/Home/Home'
import { Products } from './Pages/Products/Products.jsx';
import Login from './Pages/Login/Login.jsx';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />

      </Routes>

      <Footer />


    </>

  );
};

export default App;
