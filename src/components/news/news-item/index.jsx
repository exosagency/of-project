import arrowBtn from "assets/arrow.png";
import { Link } from "react-router-dom";

const NewsItem = ({ subtitle, title, image, id }) => {
    return (
        <div className="news-item-wrapper">
            <div className="news-image-wrapper">
                <img src={image} alt="news" />
            </div>
            <div className="news-content-wrapper">
                <p className="news-item-subtitle">{subtitle}</p>
                <h2 className="news-item-title">{title}</h2>
                <Link className="read-more-btn" to={"/article/" + id}>
                    Read more <img src={arrowBtn} alt="arrow" />
                </Link>
            </div>
        </div>
    );
};

export default NewsItem;
