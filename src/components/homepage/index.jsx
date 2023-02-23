import line from "../../assets/line.png";
import arrow from "../../assets/arrow-2.png";
import arrowBtn from "../../assets/arrow.png";
import longLine from "../../assets/line-2.png";
import Header from "./Header";

const Homepage = ({ isOverlayOpen }) => {
    const scrollToServices = () => {
        const servicesPosition = document.querySelector("#services")?.offsetTop;
        console.log("a", servicesPosition);
        window.scrollTo({ top: servicesPosition, behavior: "smooth" });
    };
    return (
        <div className="homepage-wrapper page-wrapper" id="homepage">
            <Header />
            <div className={`sidebar-wrapper ${isOverlayOpen ? "inverted" : ""}`}>
                <div className="sidebar-countries">
                    <p>USA</p>
                    <img alt="line" src={line} />
                    <p>AUS</p>
                </div>
                <div className="sidebar-discover">
                    <p>discover</p>
                    <a hreaf="/#">
                        <img alt="arrow" src={arrow} />
                    </a>
                </div>
            </div>
            <main className="homepage-main">
                <p className="onlyfans-text">ONLYFANS MANAGEMENT AGENCY</p>
                <h1>
                    FINANCIAL <br /> FREEDOM AT <br /> YOUR FINGERTIPS
                </h1>
                <p className="agency-text">
                    At EXOS Agency our partners are enabled to reach
                    <br /> the pinnacle of success withing the fan-base subscription market
                </p>
                <button className="learn-more-btn" onClick={() => scrollToServices()}>
                    Learn more <img alt="arrow" src={arrowBtn} />
                </button>
            </main>
            <footer className="homepage-footer">
                <div>
                    <p>01</p>
                    <img src={longLine} alt="line" />
                    <p>02</p>
                    <p>03</p>
                    <p>04</p>
                </div>
            </footer>
        </div>
    );
};

export default Homepage;
