import "./Footer.css"
import { Link } from "react-router-dom"


function Footer() {

    return (
        <div className="footer-container">

            <div className="footer-logo">
                <p>Website Logo</p>
            </div>

            <div className="footer-page-section">
                
                <Link to="/About" >About</Link>
                <Link to="/Products" >Products</Link>
                <Link to="/Contact" >Contact</Link>
            </div>

            <div className="footer-social-section">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>

            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>Privacy & Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}

export default Footer;