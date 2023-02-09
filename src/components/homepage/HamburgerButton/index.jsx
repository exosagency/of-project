const HamburgerButton = ({ isOpen, onClick }) => (
    <div className={`hamburget-button-wrapper ${isOpen ? "change" : ""}`}>
        <button type="button" className="hamburger-button" onClick={onClick}>
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
        </button>
    </div>
);

export default HamburgerButton;
