import "../styles/team.css";

import img1 from "../assets/team1.png";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png";
import img4 from "../assets/team4.png";
import img5 from "../assets/team5.png";

function Team() {
  const contests = [
    {
      img: img1,
      name: "John Doe",
      position: "C. Executive Officer",
    },
    {
      img: img2,
      name: "Larry Olarenwaju",
      position: "C. operation Officer",
    },
    {
      img: img3,
      name: "James Godchella",
      position: "C. Tech Officer",
    },
    {
      img: img4,
      name: "John Doe",
      position: "C. Executive Officer",
    },
    {
      img: img5,
      name: "John Doe",
      position: "C. Executive Officer",
    },
  ];
  return (
    <>
      <div className="team">
        <h3>Team</h3>
        <div className="team_pics">
          {contests.map((contest) => {
            return (
              <>
                <div className="img">
                  <img src={contest.img} alt="img" />
                  <div className="toogle">
                    <p>{contest.name}</p>
                    <span>{contest.position}</span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Team;
