import { MyContext } from "MyContext";
import HamburgerButton from "components/homepage/HamburgerButton";
import Overlay from "components/homepage/Overlay";
import React, { useState } from "react";

const PageWrapper = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <MyContext.Provider value={{ isSideBarOpen, setIsSideBarOpen }}>
            <Overlay isOpen={isSideBarOpen} setIsOverlayOpen={setIsSideBarOpen} />
            <HamburgerButton isOpen={isSideBarOpen} onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
            {children}
        </MyContext.Provider>
    );
};

export default PageWrapper;
