const Testimonials = ({ inverted, name, image, link, text }) => (
    <div className={`testimonials-section-wrapper ${inverted ? "testimonials-section-wrapper-inverted" : ""}`}>
        <div className="images">
            <a className="link" href={"https://www." + link} target="_blank" rel="noreferrer">
                <img src={image} alt={name} />
            </a>
        </div>
        <div className="testimonials-content">
            <p className="testimonials-subtitle">testimonial</p>
            <h2 className="testimonials-title">{text}</h2>
            <div className="testimoials-author">
                <a className="link" href={"https://www." + link} target="_blank" rel="noreferrer">
                    <p className="author">{name}</p>
                </a>
                <p className="role">Content Creator</p>
                <a className="link" href={"https://www." + link} target="_blank" rel="noreferrer">
                    {link}
                </a>
            </div>
        </div>
    </div>
);

export default Testimonials;
