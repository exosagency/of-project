import SocialMediaList from "../../SocialMediaList";

const Overlay = ({ isOpen, setIsOverlayOpen }) => {
    const scrollToServices = (e) => {
        e.preventDefault();
        setIsOverlayOpen(false);
        const servicesPosition = document.querySelector("#services")?.offsetTop;
        window.scrollTo({ top: servicesPosition, behavior: "smooth" });
    };
    const scrollToHome = (e) => {
        e.preventDefault();
        setIsOverlayOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={`homepage-overlay ${!isOpen ? "close" : ""}`}>
            <div className="overlay-header"></div>
            <nav>
                <a href="/homepage" onClick={scrollToHome}>
                    Home
                </a>
                <a href="/services" onClick={scrollToServices}>
                    Services
                </a>
                <a href="/" onClick={scrollToHome}>
                    Our Models
                </a>
                <a href="/" onClick={scrollToHome}>
                    News
                </a>
                <a href="/" onClick={scrollToHome}>
                    Contact
                </a>
                <button
                    onClick={() => {
                        throw new Error("Testing error page!");
                    }}
                >
                    ERROR
                </button>
            </nav>
            <div className="overlay-footer">
                <SocialMediaList isColorInverted />
            </div>
        </div>
    );
};

export default Overlay;
