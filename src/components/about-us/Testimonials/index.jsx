
const Testimonials = ({ inverted, name, image, link, text }) => (
    <div className={`testimonials-section-wrapper ${inverted ? "testimonials-section-wrapper-inverted" : ""}`}>
        <div className="images">
            <img src={image} alt={name} />
        </div>
        <div className="testimonials-content">
            <p className="testimonials-subtitle">testimonials</p>
            <h2 className="testimonials-title">{text}</h2>
            <div className="testimoials-author">
                <p className="author">{name}</p>
                <p className="role">Content Creator</p>
                <a className="link" href={"https://www." + link} target="_blank" rel="noreferrer">
                    {link}
                </a>
            </div>
        </div>
    </div>
);

export default Testimonials;
