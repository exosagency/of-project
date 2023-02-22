import SocialMediaList from "../../SocialMediaList";

const Overlay = ({ isOpen }) => {
    return (
        <div className={`homepage-overlay ${!isOpen ? "close" : ""}`}>
            <div className="overlay-header"></div>
            <nav>
                <a href="/">Home</a>
                <a href="/">Services</a>
                <a href="/">Our Models</a>
                <a href="/">News</a>
                <a href="/">Contact</a>
            </nav>
            <div className="overlay-footer">
                <SocialMediaList isColorInverted />
            </div>
        </div>
    );
};

export default Overlay;