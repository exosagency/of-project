import ContentSelection from "./ContentSelection";
import { useState } from "react";
import Slide from "./Slide";
import { servicesContent } from "content/services";

const ServicesPage = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);
    const currentOffset = selectedSlide * -100;

    return (
        <>
            <ContentSelection activePage={selectedSlide} setActivePage={setSelectedSlide} />
            <div className="slider">
                <div className="slider-content" style={{ left: currentOffset + "vw" }}>
                    {servicesContent.map((content) => (
                        <Slide
                            img={content.img}
                            subtitle={content.subtitle}
                            title={content.title}
                            text={content.text}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
