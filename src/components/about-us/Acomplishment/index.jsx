import LeftImage from "assets/about-us/green-leaf.jpg";
import RightImage from "assets/about-us/black-red.jpg";
import Speedometer from "assets/about-us/Speedometer.png";
import PeopleImg from "assets/about-us/users.png";
import Agenda from "assets/about-us/Agenda.png";
import Briefcase from "assets/about-us/Briefcase.png";


import AcomplishmentItem from "./AcomplishmetItem";

const Acomplishment = () => (
    <div className="about-us-content-wrapper">
        <div className="about-us-left-image">
            <img src={LeftImage} alt="acomplishments" />
            <AcomplishmentItem title="372h" classPosition="left1" text="Works Hours Weekly" img={Speedometer} />
            <AcomplishmentItem title="26" classPosition="left2" text="Trusted Partners" img={PeopleImg} />
            <AcomplishmentItem title="2020" classPosition="right2" text="Founded & Established" img={Agenda} />
        </div>
        <div className="about-us-right-image">
            <img src={RightImage} alt="acomplishments" />
            <AcomplishmentItem title="100+" classPosition="right1" text="Trusted Clients" img={PeopleImg} />
            <AcomplishmentItem title="500+" classPosition="right2" text="Delivered Campaigns" img={Briefcase} />
        </div>
    </div>
);

export default Acomplishment;
