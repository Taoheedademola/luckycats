import "../styles/about.css";

function About() {
  return (
    <>
      <div className="mainContainer">
        <div className="about">
          <h3>About Us</h3>

          <p>
            Maneki, powered by <span> Lucky Catz </span> token is the most
            distinctive and innovative blockchain powered online jackpot and
            raffle, where every player is a winner. Our goal has always been to
            design, improve, reinvent and shape the future of online gaming.
            This is simply the best with no sophisticated nor boring procedure.
            <br></br>
            <br></br>
            There will be hourly, daily, weekly, and quarterly draws with
            mouth-watering prizes. To support our players, we have a team of
            dedicated ambassadors who work around the clock with customer
            support.
          </p>
          <button>
            <img src="/images/playbtn.png" alt="playbtn" />
            <span>Play Now</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
