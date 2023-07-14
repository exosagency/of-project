import insta from "../../assets/insta.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
const SocialMediaList = ({ isColorInverted }) => (
    <div className={`social-media-options ${isColorInverted ? "inverted" : ""}`}>
        <p>Follow us</p>
        <a href="https://www.instagram.com/exos.agency/" target="_blank" rel="noreferrer">
            <img alt="instagram" src={insta} />
        </a>
        <a href="https://www.tiktok.com/@exos.agency" target="_blank" rel="noreferrer">
            <img alt="tiktok" src={tiktok} />
        </a>
        <a href="https://twitter.com/exos_agency" target="_blank" rel="noreferrer">
            <img alt="twitter" src={twitter} />
        </a>
        <a href="https://www.facebook.com/exosagency" target="_blank" rel="noreferrer">
            <img alt="facebook" src={facebook} />
        </a>
    </div>
);

export default SocialMediaList;
