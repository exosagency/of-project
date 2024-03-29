import img from "assets/contact-us.jpg";
import ContactForm from "./contact-form";
import logo from "assets/ExosAgencyBox.png";

const ContactUs = () => {
    return (
        <>
            <div className="main-header" id="contact-us">
                <h1 className="contact-title">Contact us</h1>
                <p className="contact-subtile subtitle">
                    The hardest task you'll face is managing everything it takes to become successful. Are you ready to
                    achieve the <b>unimaginable</b>?
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
                            <a href="mailto: info@exos.agency">info@exos.agency</a>
                            <br />
                            <a href="tel:+1 805 402 5580">+1 805 402 5580</a>
                            <br />
                        </h2>
                    </div>
                </div>
                <div className="contact-form-logo-wrapper">
                    <ContactForm />
                    <div className="logo-div">
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
