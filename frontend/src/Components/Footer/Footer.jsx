import "./Footer.css"
import { Link } from "react-router-dom"


function Footer() {

    return (
        <div className="footer-container">

            <div className="footer-logo">
                <p>Website Logo</p>
            </div>

            <div className="footer-page-section">
                
                <Link to="/about" >About</Link>
                <Link to="/products" >Products</Link>
                <Link to="/contact" >Contact</Link>
            </div>

            <div className="footer-social-section">
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>

            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>Privacy & Policy</p>
                <Link to='/login/register/terms-and-conditions' className='btn-terms-condition'>
                <p>Terms of Service</p>
                </Link>
            </div>
        </div>
    )
}

export default Footer;