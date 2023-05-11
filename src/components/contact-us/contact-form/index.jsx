import { useState } from "react";
import arrowBtn from "assets/arrow.png";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        instagram: "",
        emailAddress: "",
        description: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        firstName: "",
        phoneNumber: "",
        instagram: "",
        emailAddress: "",
        description: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorMessage({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            instagram: "",
            emailAddress: "",
            description: "",
        });
        const newErrors = { ...errorMessage };
        let isValid = true;
        Object.keys(formData).forEach((key) => {
            if (key != "lastName" && formData[key] === "") {
                isValid = false;
                newErrors[key] = "This input field is required.";
            }
        });
        if (!isValid) {
            console.log(newErrors);

            setErrorMessage(newErrors);
            return;
        }
        // do something with the form data
        console.log(formData, errorMessage);
    };
    // console.log(errorMessage);
    return (
        <div className="form-wrapper" id="apply-now">
            <h2 className="form-subtitle">Apply now</h2>
            <h2 className="form-title">If you want to join</h2>
            <form onSubmit={handleSubmit}>
                <div className="column-inputs">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name*"
                            value={formData.firstName}
                            onChange={handleInputChange}
                        />
                        {!!errorMessage.firstName && <p className="error-message">{errorMessage.firstName}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="column-inputs">
                    <div>
                        <input
                            placeholder="Phone number*"
                            name="phoneNumber"
                            type="number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                        {errorMessage.phoneNumber && <p className="error-message">{errorMessage.phoneNumber}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="instagram"
                            placeholder="Add instagram*"
                            value={formData.instagram}
                            onChange={handleInputChange}
                        />
                        {errorMessage.instagram && <p className="error-message">{errorMessage.instagram}</p>}
                    </div>
                </div>
                <input
                    type="mail"
                    name="emailAddress"
                    placeholder="Email Address*"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                />
                {errorMessage.emailAddress && <p className="error-message">{errorMessage.emailAddress}</p>}
                <textarea
                    name="description"
                    placeholder="Describe what you are looking for from an agency and let us know if you are just staring oout or if you're experienced with growing on OnlyFans*"
                    value={formData.description}
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                    rows={4}
                />
                {errorMessage.description && <p className="error-message">{errorMessage.description}</p>}

                <button type="submit">
                    Submit <img src={arrowBtn} alt="arrow" />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
