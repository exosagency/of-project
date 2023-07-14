import { models } from "content/models";
import ModelMember from "./ModelMember";

const OurModels = () => {
    return (
        <div className="our-team-wrapper our-models-wrapper">
            <h2>Our Models</h2>
            <div className="team-grid">
                {models.map((cl) => (
                    <ModelMember key={cl.name} client={cl.name} image={cl.image} link={cl.link} />
                ))}
            </div>
        </div>
    );
};

export default OurModels;
