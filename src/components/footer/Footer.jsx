import "./footer.css";
import Logo from "../../assests/images/aboutLogo.png";

function Footer() {
  return (
    <>
    <footer>
        <div className="footer">
            <img src={Logo} alt="Logo" className="logo"/>
            <span className="brand-name">
                <h2>Musfiqur Shovon</h2>
            </span>
            <div className="bar"></div>
            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="copyright">
                &copy; 2024 Musfiqur Shovon. All rights reserved.
            </div>
        </div>
    </footer>
    </>
  );
}

export default Footer;