import OurModels from "./OurModels";
import Testimonials from "./Testimonials";
import { testimonials } from "content/about-us";

const AboutUsPage = () => {
    return (
        <>
            <OurModels />
            {testimonials.map((tst, index) => (
                <Testimonials
                    image={tst.image}
                    link={tst.link}
                    name={tst.name}
                    text={tst.text}
                    key={tst.name}
                    inverted={(index + 1) % 2 === 0}
                />
            ))}
        </>
    );
};

export default AboutUsPage;
