import Image from "../../assets/about-us/about-us1.jpg";
import Acomplishment from "./Acomplishment";
import HeaderAboutUs from "./HeaderAboutUs";
import AboutUsSection from "./Section";
import WhyUsImg from "assets/about-us/img-2.jpg";
import ContactUsImg from "assets/about-us/beach.jpg";
import OurTeam from "./OurTeam";
import OurModels from "./OurModels";
import Testimonials from "./Testimonials";
const AboutUsPage = () => {
    return (
        <>
            {/* <HeaderAboutUs /> */}
            {/* <AboutUsSection
                img={Image}
                title="WE DELIVER THE BEST RESULTS"
                subtitle="JOIN EXOS"
                text="No matter who you are you can succeed with Exos Agency. Whether you are highly established person or just starting out. We've built a system that can generate multiple income streams from branding and marketing."
            /> */}
            {/* <Acomplishment /> */}
            {/* <AboutUsSection
                img={WhyUsImg}
                title="WE VALUE QUALITY OVER QUANTITY"
                subtitle="WHY US?"
                inverted
                text="We work with people who are as dedicated to their craft as we are to ours. And, we do everything. With a team like us behind a hard working individual the sky is not the limit. There is no limit."
            /> */}
            {/* <OurTeam /> */}
            <OurModels />
            <Testimonials />
            <Testimonials inverted />
            <Testimonials />
            <Testimonials inverted />
            {/* <AboutUsSection
                img={ContactUsImg}
                title="WE'RE HERE TO HELP YOU."
                subtitle="CONTACT US"
                inverted
                btnText="Contact us"
                text="Don't take on the time consuming tasks by yourself that are required to grow exponentially."
            /> */}
        </>
    );
};

export default AboutUsPage;
