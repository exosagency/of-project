import TeamMember from "./TeamMember";

const OurTeam = () => {
    return (
        <div className="our-team-wrapper">
            <h2>Our team</h2>
            <div className="team-grid">
                <TeamMember border name="Tyler McGhee" title="ceo & co founder" twitter facebook />
                <TeamMember border color="dark" name="Place Holder" title="pr & marketing" twitter instagram />
                <TeamMember border color="light" name="Max McGhee" title="chief operating officer" twitter facebook />
                <TeamMember color="light" name="J.R Galia" title="web developer" twitter facebook instagram />
                <TeamMember border color="light" name="Cody Tuttle" title="creative director" twitter facebook />
                <TeamMember border color="light" name="Place Holder" title="branding expert" twitter facebook />
                <TeamMember border name="Place Holder" title="manager" twitter facebook />
                <TeamMember name="Place Holder" title="manager" twitter facebook />
            </div>
        </div>
    );
};

export default OurTeam;
