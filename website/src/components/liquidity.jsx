import "../styles/liquidty.css";

function Liquidity() {
  return (
    <>
      <div className="liquidity_big_containr">
        <div className="liquidity_containr">
          <h3>Provide Liquidity</h3>
          <div className="bnbCount">
            <p>
              <span>144</span>of 1,000 BNB provided so far
            </p>

            <span>
              <span>?</span>
              <p>Benefits?</p>
            </span>
          </div>
          <img src="/images/progress.png" alt="progress" />

          <button className="add_btn">
            <span>+</span>
            <p>Add Liquidity</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Liquidity;
