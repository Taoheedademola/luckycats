import "../styles/hero.css";

function Hero() {
  return (
    <>
      <div className="hero_container">
        <div className="backgrounds">
          <div className="left"></div>
          <div className="right"></div>
        </div>

        <div className="hero_wrapper">
          <div className="hero_texts">
            <h3>ARE YOU FEELING LUCKY?</h3>

            <p>
              There is only one way to discover. Get into the Maneki coliseum
              and set your Lucky Catz in play. You might just be carting away
              mind blowing rewards.
            </p>

            <div className="hero_texts_buttons">
              <button>Get Started</button>
              <button>How to play</button>
            </div>
          </div>
          <div className="hero_images">
            <img src="/images/hero.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
