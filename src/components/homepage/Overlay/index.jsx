import { Link } from "react-router-dom";
import SocialMediaList from "../../SocialMediaList";

const Overlay = ({ isOpen, setIsOverlayOpen }) => {
    return (
        <div className={`homepage-overlay ${!isOpen ? "close" : ""}`}>
            <div className="overlay-header"></div>
            <nav>
                <Link to="/#homepage" onClick={() => setIsOverlayOpen(false)}>
                    Home
                </Link>
                <Link to="/#services" onClick={() => setIsOverlayOpen(false)}>
                    Services
                </Link>
                <Link to="/#news" onClick={() => setIsOverlayOpen(false)}>
                    News
                </Link>
                <Link to="/#contact-us" onClick={() => setIsOverlayOpen(false)}>
                    Contact
                </Link>
                <Link to="/#apply-now" onClick={() => setIsOverlayOpen(false)}>
                    Apply Now
                </Link>
            </nav>
            <div className="overlay-footer">
                <SocialMediaList isColorInverted />
            </div>
        </div>
    );
};

export default Overlay;
