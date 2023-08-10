import { Link } from "react-router-dom";
import arrowBtn from "../../../assets/arrow.png";

const Slide = ({ img, subtitle, title, text }) => {
    const scrollToContactUs = () => {
        const servicesPosition = document.querySelector("#contact-us")?.offsetTop;
        window.scrollTo({ top: servicesPosition - 60, behavior: "smooth" });
    };
    return (
        <div className="slide">
            <div className="services-content-wrapper">
                <div className="content-image">
                    <img src={img} alt="management" />
                </div>
                <div className="services-content">
                    <h2 className="subtitle">{subtitle}</h2>
                    <h2 className="title">{title}</h2>
                    <p>{text}</p>
                    <Link to={"/#contact-us"} onClick={() => scrollToContactUs()} type="button">
                        Contact us <img src={arrowBtn} alt="arrow" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slide;
