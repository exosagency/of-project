import ModelMember from "./ModelMember";

const clients = [
    { name: "Client 1", image: "" },
    { name: "Client 2", image: "" },
    { name: "Client 3", image: "" },
    { name: "Client 4", image: "" },
    { name: "Client 5", image: "" },
    { name: "Client 6", image: "" },
    { name: "Client 7", image: "" },
    { name: "Client 8", image: "" },
];
const OurModels = () => {
    return (
        <div className="our-team-wrapper our-models-wrapper">
            <h2>Our Models</h2>
            <div className="team-grid">
                {clients.map((cl) => (
                    <ModelMember key={cl.name} client={cl.name} />
                ))}
            </div>
        </div>
    );
};

export default OurModels;
