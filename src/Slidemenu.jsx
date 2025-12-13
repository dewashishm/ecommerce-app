import "./Slidemenu.css";
import { useState } from "react";
import burgerbar from "./images/burger-bar.png";
import close from "./images/close.png";



export function Slidemenu() {

    const [isOpen, setIsOpen] = useState(false);




    return (
        <>


            <img src={burgerbar} onClick={() => setIsOpen(true)} alt="" srcset="" className="menu" />
        
                <div className={isOpen ? "sidebar open" : "sidebar"}>
                    <img src={close} onClick={() => setIsOpen(false)} className="closebtn" />

                    <p className="menu-logo">Website Logo</p>
                    <p className="sidebar-elements">Home</p>
                    <p className="sidebar-elements">Products</p>
                    <p className="sidebar-elements">Contacts</p>
                    <p className="sidebar-elements">Others</p>

                </div>

            
        </>
    )
}