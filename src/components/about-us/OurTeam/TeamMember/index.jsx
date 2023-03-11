import InstagramIcon from "assets/insta.png";
import FacebookIcon from "assets/facebook.png";
import TwitterIcon from "assets/twitter.png";

const TeamMember = ({ color, name, title, instagram, twitter, facebook, border }) => {
    return (
        <div className={`team-member ${!!border ? "team-member-border" : ""}`}>
            <div className={`team-member-picture ${color}`}></div>
            <div className="team-member-info">
                <p className="team-member-name">{name}</p>
                <p className="team-member-title">{title}</p>
                <div className="team-member-links">
                    {twitter && (
                        <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                            <img src={TwitterIcon} alt="twitter" />
                        </a>
                    )}
                    {facebook && (
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <img src={FacebookIcon} alt="facebook" />
                        </a>
                    )}
                    {instagram && (
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <img src={InstagramIcon} alt="instagram" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMember;
