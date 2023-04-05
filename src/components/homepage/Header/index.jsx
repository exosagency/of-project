import logo from "../../../assets/logo.png";
import { useEffect, useState } from "react";
// import arrowBtn from "../../../assets/arrow.png";
// import SocialMediaList from "../../SocialMediaList";
const FixedHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`homepage-header ${scrollPosition > 60 ? "scrolled-header" : ""}`}>
            <img alt="logo" src={logo}></img>
            {/* <SocialMediaList /> */}
            <button className="apply-now-btn" type="button">
                Apply now
            </button>
        </header>
    );
};
export default FixedHeader;
