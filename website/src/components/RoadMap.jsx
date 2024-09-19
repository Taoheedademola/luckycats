import "../styles/Roadmap.css";

function RoadMap() {
  return (
    <>
      <div className="road_map">
        <h3>Roadmap</h3>
        <div className="stage">
          <button>Stage 1</button>
          <button>Stage 2</button>
          <button>Stage 3</button>
          <button>Stage 4</button>
        </div>
        <div className="jackport_wrapper">
          <div className="jackport_container">
            <div>
              <img src="/images/union.png" alt="union" />
              <p>Increase Online Jackpot-raffle games & draws</p>
            </div>
            <div>
              <img src="/images/star.png" alt="star" />
              <p>
                Build a huge asset jackpot pool (value will be <br />
                determined by the community)
              </p>
            </div>
            <div>
              <img src="/images/star.png" alt="star" />
              <p>Launch “Sponsor a Jackpot-raffle partnerships”</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMap;
