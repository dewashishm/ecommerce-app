import "./Slidemenu.css";
import { useState } from "react";
import burgerbar from "../../images/burger-bar.png";
import website_logo from "../../images/website-logo.png";
import close from "../../images/close.png";
import { Link } from 'react-router-dom'


function Slidemenu() {

    const [isOpen, setIsOpen] = useState(false);




    return (
        <>


            <img src={burgerbar} onClick={() => setIsOpen(true)} alt="" srcset="" className="menu" />
        
                <div className={isOpen ? "sidebar open" : "sidebar"}>
                    <img src={close} onClick={() => setIsOpen(false)} className="closebtn" />
                    
                    <img src={website_logo} className="menu-logo"></img>


                    <Link to='/' onClick={() => setIsOpen(false)} className="sidebar-elements">Home</Link>
                    <hr className="break-line"/>
                    <Link to='/products' onClick={() => setIsOpen(false)} className="sidebar-elements">Products</Link>
                    <hr className="break-line"/>
                    <Link to='/contact' onClick={() => setIsOpen(false)} className="sidebar-elements">Contact</Link>
                    <hr className="break-line"/>
                    <Link to='/about' onClick={() => setIsOpen(false)} className="sidebar-elements">About</Link>

                </div>

            
        </>
    )
};

export default Slidemenu;