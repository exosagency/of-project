import Homepage from "./components/homepage";
import ServicesPage from "./components/services";
import "./styles/main.scss";
import { useState } from "react";
import HamburgerButton from "./components/homepage/HamburgerButton";
import Overlay from "./components/homepage/Overlay";
import AboutUsPage from "./components/about-us";
import Footer from "./components/Footer";
import FixedHeader from "components/homepage/Header";
function App() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className="page-wrapper">
            <Homepage isOverlayOpen={isSideBarOpen} />
            <ServicesPage />
            <AboutUsPage />
            <Overlay isOpen={isSideBarOpen} setIsOverlayOpen={setIsSideBarOpen} />
            <HamburgerButton isOpen={isSideBarOpen} onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
            <Footer />
            <FixedHeader />
        </div>
    );
}

export default App;
