import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useEffect, useState, useContext } from "react";
import { MyContext } from "MyContext";

const FixedHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const { setIsSideBarOpen } = useContext(MyContext);

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
            <Link to={"/"} className="logo-link">
                <img alt="logo" src={logo}></img>
            </Link>
            {/* <SocialMediaList /> */}
            <Link className="apply-now-btn" type="button" to="/#apply-now" onClick={() => setIsSideBarOpen(false)}>
                Apply now
            </Link>
        </header>
    );
};
export default FixedHeader;
