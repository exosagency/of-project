import AboutUsPage from "components/about-us";
import Footer from "components/Footer";
import FixedHeader from "components/homepage/Header";
import ContactUs from "components/contact-us";
import News from "components/news";
import Homepage from "components/homepage";
import ServicesPage from "components/services";
import PageWrapper from "./pageWrapper";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const MainPage = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!!hash) {
            const servicesPosition = document.querySelector(hash)?.offsetTop;
            window.scrollTo({ top: servicesPosition - 60, behavior: "smooth" });
        }
    }, [hash, pathname]);
    return (
        <PageWrapper>
            <Homepage />
            <ServicesPage />
            <AboutUsPage />
            <News />
            <ContactUs />
            <Footer />
            <FixedHeader />
        </PageWrapper>
    );
};

export default MainPage;
