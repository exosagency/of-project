import ArticleMain from "assets/article-big.jpg";
import ArticleSide from "assets/article-content.png";

const Article = () => {
    return (
        <div className="article-page">
            <div className="article-wrapper">
                <p className="article-subtitle">Jan 27, 2021</p>
                <h2 className="article-title">Top 5 Tactics to Gain High Paying Subscribers on OnlyFans</h2>
                <img src={ArticleMain} alt="" />
                <div className="article-content">
                    <p className="article-text">
                        <span className="first-letter">P</span>hasellus volutpat purus a iaculis lobortis. Mauris
                        sollicitudin non elit nec vulputate. Nam eu tristique orci. Nulla ipsum dui, Suspendisse
                        scelerisque, erat id porta pretium, libero nisi efficitur magna, eget cursus sem nisi a tortor.
                        Etiam ac libero maximus, accumsan dolor hendrerit, efficitur odio. Pellentesque vestibulum
                        tortor non eros tristique tincidunt. Proin accumsan feugiat mi at rutrum. Phasellus ornare
                        pretium purus non facilisis. Vestibulum pretium consequat nisi, quis convallis urna bibendum
                        tempus. Pellentesque nibh
                    </p>
                    <img src={ArticleSide} alt="" />
                    <h2 className="whats-new-text">What's new in this?</h2>
                    <p className="article-text">
                        Phasellus volutpat purus a iaculis lobortis. Mauris sollicitudin non elit nec vulputate. Nam eu
                        tristique orci. Nulla ipsum dui, placerat non gravida vel, vehicula a mauris. Suspendisse
                        scelerisque, erat id porta pretium, libero nisi efficitur magna, eget cursus sem nisi a tortor.
                        Etiam ac libero maximus, accumsan dolor hendrerit, efficitur odio. Pellentesque vestibulum
                        tortor non eros tristique tincidunt.
                    </p>
                </div>
                <div className="next-article-wrapper">
                    <p className="subtitle">next article</p>
                    <h2 className="title">10 Strategies to maximize your earnings with OnlyFans</h2>
                </div>
            </div>
        </div>
    );
};

export default Article;
