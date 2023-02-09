import insta from "../../assets/insta.png";
import tiktok from "../../assets/tiktok.png";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
const SocialMediaList = ({ isColorInverted }) => (
    <div className={`social-media-options ${isColorInverted ? "inverted" : ""}`}>
        <p>Follow us</p>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img alt="instagram" src={insta} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <img alt="tiktok" src={tiktok} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <img alt="twitter" src={twitter} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img alt="facebook" src={facebook} />
        </a>
    </div>
);

export default SocialMediaList;
