import img from "assets/contact-us.jpg";

const ContactUs = () => {
    return (
        <>
            <div className="main-header">
                <h1>Contact us</h1>
                <p className="subtitle">
                    The hardest task you'll face is managing everything it takes to become successful. Are you ready to
                    achieve the unimaginable?
                </p>
            </div>
            <div className={`contact-us-section `}>
                <div className="contact-us-content-wrapper">
                    <div className="contact-us-image">
                        <img src={img} alt="management" />
                    </div>
                    <div className="contact-us-content">
                        <h2 className="subtitle">our info</h2>
                        <h2 className="title">
                            info@exos.agency
                            <br />
                            +1 805 402 5580
                            <br />
                            Phoneix, AZ
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
