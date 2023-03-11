const AcomplishmentItem = ({ img, title, text, classPosition }) => (
    <div className={`acomplishment-item ${classPosition}`}>
        <img src={img} alt="speedometer" />
        <p className="acomplishment-title">{title}</p>
        <p className="acomplishment-text">{text}</p>
    </div>
);

export default AcomplishmentItem;
