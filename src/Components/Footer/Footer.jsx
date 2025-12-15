import "./Footer.css"


export function Footer() {

    return (
        <div className="footer-container">

            <div className="footer-logo">
                <p>Website Logo</p>
            </div>

            <div className="footer-page-section">
                <p>About</p>
                <p>Products</p>
                <p>Contacts</p>
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