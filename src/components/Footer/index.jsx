import insta from "../../assets/insta.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import send from "../../assets/send-1-svgrepo-com.svg";


const footerNav = ["home", "services", "our models", "news", "contact"];

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="main-footer-content">
                <div className="footer-nav">
                    {footerNav.map((item) => (
                        <div>
                            <a href="">{item}</a>
                        </div>
                    ))}
                </div>
                <div className="footer-contact-wrapper">
                    <h3>Contact</h3>
                    <a href="">
                        info@exos.agency
                        <br />
                        +1 805 402 5580
                        <br />
                        Phoenix, AZ
                    </a>
                </div>
                <div className="footer-follow-wrapper">
                    <h3>Follow us</h3>
                    <div className="social-media-footer">
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
                    <p>2023 @ Exos Agency</p>
                </div>
                <div className="footer-newsletter-wrapper">
                    <h3>Join our Newsletter</h3>
                    <p>Stay up to date on what we're up to</p>
                    <div className="newsletter-wrapper">
                        <input type="text" name="" id="" placeholder="Email address"/>
                        <button><img src={send} alt="send" /></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
