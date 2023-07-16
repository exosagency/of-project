import line from "../../assets/line.png";
import arrow from "../../assets/arrow-2.png";
import arrowBtn from "../../assets/arrow.png";
import { useContext } from "react";
import { MyContext } from "MyContext";

const Homepage = () => {
    const { isSideBarOpen } = useContext(MyContext);

    const scrollToServices = () => {
        const servicesPosition = document.querySelector("#services")?.offsetTop;
        window.scrollTo({ top: servicesPosition - 60, behavior: "smooth" });
    };
    return (
        <div className="homepage-wrapper page-wrapper" id="homepage">
            <div className={`sidebar-wrapper ${isSideBarOpen ? "inverted" : ""}`}>
                <div className="sidebar-content">
                    <div className="sidebar-countries">
                        <p>USA</p>
                        <img alt="line" src={line} />
                        <p>AUS</p>
                    </div>
                    <div className="sidebar-discover">
                        <p>discover</p>
                        <button onClick={scrollToServices}>
                            <img alt="arrow" src={arrow} />
                        </button>
                    </div>
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
                {/* <div> */}
                {/* <p>01</p> */}
                {/* <img src={longLine} alt="line" /> */}
                {/* <p>02</p>
                    <p>03</p>
                    <p>04</p> */}
                {/* </div> */}
            </footer>
        </div>
    );
};

export default Homepage;
