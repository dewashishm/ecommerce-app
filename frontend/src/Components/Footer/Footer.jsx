import "./Footer.css"
import { Link } from "react-router-dom"


function Footer() {

    return (
        <div>

            <div className="footer-main-container">
                <hr />

                <div className="footer-items">
                    {/*Terma Section*/}
                    <div className="footer-section">
                        <span>Terms</span>
                        <span> Privacy Policy</span>
                    </div>

                    {/* Company Section*/}

                    <div className="footer-section">

                    <h4 className="footer-title">Company</h4>
                    <ul >
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Pricing</li>
                        <li>Support Center</li>

                    </ul>
                    </div>

                    <div className="footer-section">

                    <h4 className="footer-title">Social Media</h4>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>X (Twitter)</li>

                    </ul>
                    </div>
                </div>
                <hr />
            </div>
        </div>

    )
}

export default Footer;