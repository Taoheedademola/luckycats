import "../styles/featured.css";

function Featured() {
  return (
    <>
      <div className="featured_container">
        <p>Featured In</p>

        <div className="featured_logo">
          <img src="/images/logo1.png" alt="logo" />
          <img src="/images/logo2.png" alt="logo" />
          <img src="/images/logo3.png" alt="logo" />
          <img src="/images/logo4.png" alt="logo" />
          <img src="/images/logo5.png" alt="logo" />
        </div>
      </div>
    </>
  );
}

export default Featured;
