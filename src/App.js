import Homepage from "./components/homepage";
import ServicesPage from "./components/services";
import "./styles/main.scss";
import { useState } from "react";
import HamburgerButton from "./components/homepage/HamburgerButton";
import Overlay from "./components/homepage/Overlay";
import AboutUsPage from "./components/about-us";
import Footer from "./components/Footer";
import FixedHeader from "components/homepage/Header";
import ContactUs from "components/contact-us";
import ErrorBoundary from "components/error-boundary";
import News from "components/news";

function App() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    // const [hasError, setHasError] = useState(false);

    return (
        <ErrorBoundary>
            <div className="page-wrapper">
                <Homepage isOverlayOpen={isSideBarOpen} />
                <ServicesPage />
                <AboutUsPage />
                <Overlay isOpen={isSideBarOpen} setIsOverlayOpen={setIsSideBarOpen} />
                <HamburgerButton isOpen={isSideBarOpen} onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
                <News />
                <ContactUs />
                <Footer />
                <FixedHeader />
                {/* <button onClick={() => setHasError(true)}>ERROR</button> */}
            </div>
        </ErrorBoundary>
    );
}

export default App;
