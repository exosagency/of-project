import ModelMember from "./ModelMember";
import Cherry from "assets/models/CherryBlossom.png";
import Amani from "assets/models/AmaniNoor.png";
import Zoe from "assets/models/ZoeWilder.png";
import Kelly from "assets/models/KellyAdler.png";
import Emma from "assets/models/EmmaMartinez.png";
import Eve from "assets/models/EveOwens.png";
import Africa from "assets/models/AfricaLuxx.png";
import Akira from "assets/models/AkiraKichii.png";

const clients = [
    { name: "CherryBlossom", image: Cherry, link: "https://onlyfans.com/cherryblossomvip/c3" },
    { name: "AmaniNoor", image: Amani, link: "https://onlyfans.com/amaninoorfree/c2" },
    { name: "ZoeWilder", image: Zoe, link: "https://onlyfans.com/zoewilderfree/c1" },
    { name: "KellyAdler", image: Kelly, link: "https://onlyfans.com/itssexykelly/c5" },
    { name: "EmmaMartinez", image: Emma },
    { name: "EveOwens", image: Eve },
    { name: "AfricaLuxx", image: Africa },
    { name: "AkiraKichii", image: Akira, link: "https://onlyfans.com/akirakichii/c3" },
];
const OurModels = () => {
    return (
        <div className="our-team-wrapper our-models-wrapper">
            <h2>Our Models</h2>
            <div className="team-grid">
                {clients.map((cl) => (
                    <ModelMember key={cl.name} client={cl.name} image={cl.image} link={cl.link} />
                ))}
            </div>
        </div>
    );
};

export default OurModels;
