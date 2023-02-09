import logo from "../../../assets/logo.png";
import insta from "../../../assets/insta.png";
import tiktok from "../../../assets/tiktok.png";
import twitter from "../../../assets/twitter.png";
import facebook from "../../../assets/facebook.png";
const Header = () => (
    <header className="homepage-header">
        <img src={logo}></img>
        <div className="social-media-options">
            <p>Follow us</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img alt="instagram" src={insta} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
                <img alt="tiktok" src={tiktok} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img alt="twitter" src={twitter} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img alt="facebook" src={facebook} />
            </a>
        </div>
    </header>
);
export default Header;
