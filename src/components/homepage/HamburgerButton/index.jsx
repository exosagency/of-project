import { useEffect, useState } from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
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
        <div
            className={`hamburget-button-wrapper ${isOpen ? "change" : ""} ${
                scrollPosition > 60 ? "hamburger-btn-scroll" : ""
            }`}
        >
            <button type="button" className="hamburger-button" onClick={onClick}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
            </button>
        </div>
    );
};

export default HamburgerButton;
