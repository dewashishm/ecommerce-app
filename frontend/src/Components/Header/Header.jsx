import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import "./Header.css";
import search from "../../images/searches.png"
// import burgerbar from "./images/burger-bar.png"
import cart from "../../images/shopping-cart.png"
import loginicon from "../../images/person.png"
import Slidemenu from "../Navigation Menu/Slidemenu";


function Header() {

  const[user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try{
        setUser(JSON.parse(storedUser));


      } catch (err) {
        console.error("Invalid user data in local storage");
        setUser(null);
      }
    }else{
      setUser(null);
    }
   
 }, []);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };


  return (

    <div>
      <header id="navbar">
        <Slidemenu />
        <div className="menu-container">
          <p>Amazon</p>

        </div>

        <div className='search-container'>

          <input type='text' placeholder="Search for Products..."></input>
          <img src={search} alt="" className="search-button" />

        </div>

        <div className="header-rightsection">
          {!user ? (
            <Link to='/login' className='login-button'>
              <img src={loginicon} alt="" className="login" /> <p>Login</p>
            </Link>) : (
              <div className="header-rightsection">
              <span onMouseEnter={() => {setOpen(!open)}} onMouseLeave={() => {setOpen(open)}}>
              <img src={loginicon} alt="" className="login" />
                {user?.name} 
              </span>

              {open && (
                <div className="dropdown">
                  <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>
                  <Link to="/settings" onClick={() => setOpen(false)}>Settings</Link>
                  <Link to="/" onClick={logoutHandler}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
          <img src={cart} alt="" className="cart" />

        </div>

      </header>
    </div>
  )
};

export default Header;