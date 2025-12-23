import "./Slidemenu.css";
import { useState } from "react";
import burgerbar from "../../images/burger-bar.png";
import close from "../../images/close.png";
import { Link } from 'react-router-dom'
import { Header } from "../Header/Header";



export function Slidemenu() {

    const [isOpen, setIsOpen] = useState(false);




    return (
        <>


            <img src={burgerbar} onClick={() => setIsOpen(true)} alt="" srcset="" className="menu" />
        
                <div className={isOpen ? "sidebar open" : "sidebar"}>
                    <img src={close} onClick={() => setIsOpen(false)} className="closebtn" />

                    <p className="menu-logo">Website Logo</p>
                    <Link to='/' onClick={() => setIsOpen(false)} className="sidebar-elements">Home</Link>
                    <Link to='/products' onClick={() => setIsOpen(false)} className="sidebar-elements">Products</Link>
                    <Link to='/contact' onClick={() => setIsOpen(false)} className="sidebar-elements">Contact</Link>
                    <Link to='/about' onClick={() => setIsOpen(false)} className="sidebar-elements">About</Link>

                </div>

            
        </>
    )
}