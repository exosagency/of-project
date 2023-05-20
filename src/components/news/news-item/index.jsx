import arrowBtn from "assets/arrow.png";

const NewsItem = ({ newsContent }) => {
    const { subtitle, title, image } = newsContent;
    return (
        <div className="news-item-wrapper">
            {!!image ? (
                <div className="news-image-wrapper">
                    <img src={image} alt="news" />
                </div>
            ) : (
                <div className="news-content-wrapper">
                    <p className="news-item-subtitle">{subtitle}</p>
                    <h2 className="news-item-title">{title}</h2>
                    <button className="read-more-btn">
                        Read more <img src={arrowBtn} alt="arrow" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsItem;
