import FixedHeader from "components/homepage/Header";
import Article from "components/article";
import PageWrapper from "./pageWrapper";

const ArticlePage = () => {
    return (
        <PageWrapper>
            <div className="article-main-page">
                <Article />
                <FixedHeader />
            </div>
        </PageWrapper>
    );
};

export default ArticlePage;
