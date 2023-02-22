import Homepage from "./components/homepage";
import ServicesPage from "./components/services";
import "./styles/main.scss";
import { useState } from "react";
import HamburgerButton from "./components/homepage/HamburgerButton";
import Overlay from "./components/homepage/Overlay";
function App() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className="page-wrapper">
            <Homepage isOverlayOpen={isSideBarOpen} />
            <ServicesPage />
            <Overlay isOpen={isSideBarOpen} setIsOverlayOpen={setIsSideBarOpen} />
            <HamburgerButton isOpen={isSideBarOpen} onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
        </div>
    );
}

export default App;
