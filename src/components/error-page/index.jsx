import arrowBtn from "assets/arrow.png";
import logo from "assets/logo.png";
const ErrorPage = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const reload = () => {
        window.location.reload();
    };
    return (
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
                <button className="learn-more-btn" onClick={reload}>
                    Go home <img alt="arrow" src={arrowBtn} />
                </button>
            </main>
        </div>
    );
};

export default ErrorPage;
