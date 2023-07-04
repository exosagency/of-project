const ModelMember = ({ client, image, link }) => (
    <div className="model-member">
        <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={image} alt={client} />
        </a>
    </div>
);

export default ModelMember;
