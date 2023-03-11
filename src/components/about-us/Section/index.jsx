import arrowBtn from "../../../assets/arrow.png";

const AboutUsSection = ({ img, subtitle, title, text, inverted, btnText="Our work" }) => (
    <div className={`about-us-section ${inverted ? "inverted-about-us" : ""}`}>
        <div className="about-us-content-wrapper">
            <div className="about-us-image">
                <img src={img} alt="management" />
            </div>
            <div className="about-us-content">
                <h2 className="subtitle">{subtitle}</h2>
                <h2 className="title">{title}</h2>
                <p>{text}</p>
                <button>
                    {btnText} <img src={arrowBtn} alt="arrow" />
                </button>
            </div>
        </div>
    </div>
);

export default AboutUsSection;
