import arrowBtn from "assets/arrow.png";
import logo from "assets/logo.png";
import PageWrapper from "pages/pageWrapper";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <PageWrapper>
            <div className="page-wrapper error-page-wrapper" id="homepage">
                <header className="homepage-header">
                    <img alt="logo" src={logo}></img>
                </header>
                <div className={`sidebar-wrapper`}></div>
                <main className="homepage-main">
                    <p className="onlyfans-text">ERROR</p>
                    <h1>
                        THIS PAGE DOESN'T
                        <br /> EXIST ANYMORE.
                    </h1>
                    <p className="agency-text"></p>
                    <Link to="/" className="learn-more-btn go-home-btn">
                        Go home <img alt="arrow" src={arrowBtn} />
                    </Link>
                </main>
            </div>
        </PageWrapper>
    );
};

export default ErrorPage;
