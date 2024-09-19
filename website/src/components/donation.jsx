import "../styles/donation.css";

function Donate() {
  return (
    <>
      <div className="Donate_container">
        <div className="img"></div>
        <div className="gradient"></div>
        <div className="inner_Donate_Container">
          <h3>Street 2 Class</h3>
          <p>
            Lucky Cats S2C is an opportunity for street children to have a great
            future. It focuses on the children in Africa who live miserably on
            the streets due to a lack of resources to get a good education.
            These children are vulnerable to a number of diseases as well as
            societal ills. Through earnings from KATZ online games and your
            voluntary donations, Lucky Cats aims to provide these street kids
            with quality formal education so that they can become meaningful
            specifics. More details will be available at
            <span>www.street2class.org</span>
          </p>

          <button className="btn">
            <img src="/images/icon.png" alt="icon" />
            <span>Donate</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Donate;
