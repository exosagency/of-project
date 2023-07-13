import NewsItem from "./news-item";
import { blogs } from "content/blogs";

const News = () => {
    return (
        <>
            <div className="main-header" id="news">
                <h1 className="contact-title">News</h1>
                <p className="contact-subtile subtitle">
                    Read and learn the most up to date news and strategies in the market today.
                </p>
            </div>
            <div className="news-wrapper">
                {blogs.map((item) => (
                    <NewsItem key={item.id} title={item.title} image={item.image} id={item.id} />
                ))}
            </div>
        </>
    );
};

export default News;
