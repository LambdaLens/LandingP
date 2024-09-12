import TeamTile from "../TeamTile/TeamTile"; // Adjust the path as needed
import spencerPic from "../../assets/profilePictures/spencerPic.jpeg";
import dylan from "../../assets/profilePictures/dylan.jpeg"; // Example additional imports
import Tim from "../../assets/profilePictures/Tim.jpeg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dylan Kinsella ",
      picture: dylan,
      linkedin: "https://www.linkedin.com/in/dylankinsella/",
      github: "https://github.com/dkinsell",
    },
    {
        name: "Kevin",
        picture: spencerPic,
        linkedin: "https://www.linkedin.com/in/spencer",
        github: "https://github.com/kevink018/",
    },
    {
        name: "Erin Lee",
        picture: spencerPic,
        linkedin: "https://www.linkedin.com/in/elee14/",
        github: "https://github.com/elee14",
    },
    {
        name: "Spencer Zhang",
        picture: spencerPic,
        linkedin: "https://www.linkedin.com/in/spencer",
        github: "https://github.com/spencersz",
    },
    {
        name: "Tim Hsiung",
        picture: Tim,
        linkedin: "https://www.linkedin.com/in/timhsiung/",
        github: "https://github.com/timhsiung",
    },
  ];

  return (
    <section className="team">
      <h3 className="h3 team__heading">About Our Team</h3>
      <div className="team__tiles">
        {teamMembers.map((member, index) => (
          <TeamTile
            key={index}
            name={member.name}
            picture={member.picture}
            linkedin={member.linkedin}
            github={member.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;