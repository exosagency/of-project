import Header from "../Header";
import ContentSelection from "./ContentSelection";
import managementImage from "../../assets/services.png";
import arrowBtn from "../../assets/arrow.png";
import { useState } from "react";
import Slide from "./Slide";

const ServicesPage = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);
    const currentOffset = selectedSlide * -100;
    console.log(currentOffset);
    return (
        <>
            <Header />
            <ContentSelection setActivePage={setSelectedSlide} />
            <div className="slider">
                <div className="slider-content" style={{ left: currentOffset + "vw" }}>
                    <Slide
                        img={managementImage}
                        subtitle="Exos Agency"
                        title="Management"
                        text="With Exos Agency you can say goodbye to spending countless hours managing your fan
                                    base subscription site and hello to unlocking freedom in your life"
                    />
                    <Slide
                        img={managementImage}
                        subtitle="Exos Agency"
                        title="Content"
                        text="With Exos Agency you can say goodbye to spending countless hours managing your fan
                                    base subscription site and hello to unlocking freedom in your life"
                    />
                    <Slide
                        img={managementImage}
                        subtitle="Exos Agency"
                        title="Social media"
                        text="With Exos Agency you can say goodbye to spending countless hours managing your fan
                                    base subscription site and hello to unlocking freedom in your life"
                    />
                    <Slide
                        img={managementImage}
                        subtitle="Exos Agency"
                        title="Marketing"
                        text="With Exos Agency you can say goodbye to spending countless hours managing your fan
                                    base subscription site and hello to unlocking freedom in your life"
                    />
                    <Slide
                        img={managementImage}
                        subtitle="Exos Agency"
                        title="Analytics"
                        text="With Exos Agency you can say goodbye to spending countless hours managing your fan
                                    base subscription site and hello to unlocking freedom in your life"
                    />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
