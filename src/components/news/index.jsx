import image1 from "assets/news/img1.png";
import image2 from "assets/news/img2.png";
import image3 from "assets/news/img3.png";
import image4 from "assets/news/img4.png";
import image5 from "assets/news/img5.png";
import image6 from "assets/news/img6.png";
import image7 from "assets/news/img7.png";
import image8 from "assets/news/img8.png";
import NewsItem from "./news-item";
const news = [
    { image: image1 },
    { title: "Top 5 Tactics To Gain High Paying Subscribers on OnlyFans", subtitle: "21 SEP, 2020" },
    { image: image2 },
    { title: "10 Strategies to maximize your earnings with OnlyFans", subtitle: "11 MAR, 2021" },
    { image: image3 },
    { image: image4 },
    { title: "What OnlyFans Agency should I work with?", subtitle: "25 FEB, 2020" },
    { image: image5 },
    { title: "An Introduction to OnlyFans", subtitle: "20 FEB, 2021" },
    { image: image6 },
    { title: "5 Habits that can help you succeeed faster.", subtitle: "11 FEB, 2021" },
    { title: "Team work make the dream work,huh?", subtitle: "26 JUNE, 2021" },
    { image: image7 },
    { title: "4 Effective ways of making more money on OnlyFans", subtitle: "11 JAN, 2020" },
    { image: image8 },
    { title: "The art of modern advertising for models", subtitle: "11 JAN, 2020" },
];

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
                {news.map((item) => (
                    <NewsItem key={item.title} newsContent={item} />
                ))}
            </div>
        </>
    );
};

export default News;
