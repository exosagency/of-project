import arrowBtn from "../../../assets/arrow.png";

const Slide = ({ img, subtitle, title, text }) => (
    <div className="slide">
        <div className="services-content-wrapper">
            <div className="content-image">
                <img src={img} alt="management" />
            </div>
            <div className="services-content">
                <h2 className="subtitle">{subtitle}</h2>
                <h2 className="title">{title}</h2>
                <p>{text}
                </p>
                <button>
                    Contact us <img src={arrowBtn} alt="arrow" />
                </button>
            </div>
        </div>
    </div>
);

export default Slide;
