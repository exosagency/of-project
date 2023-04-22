import Img from "assets/about-us/testimonials.jpg";

const Testimonials = ({ inverted }) => (
    <div className={`testimonials-section-wrapper ${inverted ? "testimonials-section-wrapper-inverted" : ""}`}>
        <div className="images">
            <img src={Img} alt="" />
        </div>
        <div className="testimonials-content">
            <p className="testimonials-subtitle">testimonials</p>
            <h2 className="testimonials-title">
                "I didn't realize how much more money I could make until I started working alongside exos agency."
            </h2>
            <div className="testimoials-author">
                <p className="author">Stella Reed</p>
                <p className="role">Content Creator</p>
                <a className="link" href="https://www.onlyfans.com/stellareedxo" target="_blank" rel="noreferrer">
                    www.onlyfans.com/stellareedxo
                </a>
            </div>
        </div>
    </div>
);

export default Testimonials;
