import logo from "../../../assets/logo.png";

import SocialMediaList from "../../SocialMediaList";
const Header = () => (
    <header className="homepage-header">
        <img alt="logo" src={logo}></img>
        <SocialMediaList />
    </header>
);
export default Header;
