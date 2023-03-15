import logo from "../../../assets/logo.png";
// import arrowBtn from "../../../assets/arrow.png";
// import SocialMediaList from "../../SocialMediaList";
const FixedHeader = () => (
    <header className="homepage-header">
        <img alt="logo" src={logo}></img>
        {/* <SocialMediaList /> */}
        <button className="apply-now-btn" type="button">
            Apply now 
        </button>
    </header>
);
export default FixedHeader;
