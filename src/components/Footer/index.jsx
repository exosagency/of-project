import insta from "../../assets/insta.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import send from "../../assets/send-1-svgrepo-com.svg";
import { Link } from "react-router-dom";

const footerNav = ["home", "services", "news", "apply-now"];

const Footer = () => {
    const scrollTo = (item) => {
        const topPosition = document.querySelector(`#${item}`)?.offsetTop;
        window.scrollTo({ top: topPosition - 60, behavior: "smooth" });
    };
    return (
        <footer className="main-footer">
            <div className="main-footer-content">
                <div className="footer-nav">
                    {footerNav.map((item) => (
                        <div key={item}>
                            <Link to={`/#${item}`} onClick={(e) => scrollTo(item)} type="button">
                                {item.split("-").join(" ")}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="footer-contact-wrapper">
                    <h3>Contact</h3>
                    <div>
                        <a href="mailto: info@exos.agency">info@exos.agency</a>
                        <br />
                        <a href="tel:+1 805 402 5580">+1 805 402 5580</a> <br />
                    </div>
                </div>
                <div className="footer-follow-wrapper">
                    <h3>Follow us</h3>
                    <div className="social-media-footer">
                        <a href="https://www.instagram.com/exos.agency/" target="_blank" rel="noreferrer">
                            <img alt="instagram" src={insta} />
                        </a>
                        <a href="https://www.tiktok.com/@exos.agency" target="_blank" rel="noreferrer">
                            <img alt="tiktok" src={tiktok} />
                        </a>
                        <a href="https://twitter.com/exos_agency" target="_blank" rel="noreferrer">
                            <img alt="twitter" src={twitter} />
                        </a>
                        <a href="https://www.facebook.com/exosagency" target="_blank" rel="noreferrer">
                            <img alt="facebook" src={facebook} />
                        </a>
                    </div>
                    <p>2023 @ Exos Agency</p>
                </div>
                <div className="footer-newsletter-wrapper">
                    <h3>Join our Newsletter</h3>
                    <p>Stay up to date on what we're up to</p>
                    <div className="newsletter-wrapper">
                        <input type="text" name="" id="" placeholder="Email address" />
                        <button>
                            <img src={send} alt="send" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
