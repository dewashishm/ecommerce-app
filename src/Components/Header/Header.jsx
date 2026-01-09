import { Link } from 'react-router-dom'
import "./Header.css";
import search from "../../images/searches.png"
// import burgerbar from "./images/burger-bar.png"
import cart from "../../images/shopping-cart.png"

import loginicon from "../../images/person.png"
import Slidemenu from "../Navigation Menu/Slidemenu";

function Header() {
  return (

    <div>
      <header id="navbar">
        <Slidemenu />
        <div className="menu-container">
          <p>Amazon</p>

        </div>

        <div className='search-container'>

          <input type='text' placeholder="Search for Products..."></input>
          <img src={search} alt="" srcset="" className="search-button" />

        </div>

        <div className="header-rightsection">
          <img src={cart} alt="" srcset="" className="cart" />
          <Link to='/login'>
          <img src={loginicon} alt="" srcset="" className="login" />
          </Link>
          

        </div>


      </header>
    </div>
  )
};

export default Header;