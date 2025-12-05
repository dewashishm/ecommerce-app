import "./Header.css";
import search from "./images/searches.png"
import burgerbar from "./images/burger-bar.png"
import cart from "./images/shopping-cart.png"
import loginicon from "./images/person.png"


export function Header() {
  return (

    <div>
      <header id="navbar">
        <div className="menu-container">
        <img src={burgerbar} onClick={() => setIsOpen(true)} alt="" srcset="" className="menu"/>  
        <p>Amazon</p>

        </div>






        <div className='search-container'>

          <input type='text' placeholder="Search for Products..."></input>
          <img src={search} alt="" srcset="" className="search-button" />

        </div>

        <div className="header-rightsection">
          <img src={cart} alt="" srcset="" className="cart"/>
          <img src={loginicon} alt="" srcset="" className="login"/>
          
        </div>


      </header>
    </div>
  )
}