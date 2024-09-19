import "../styles/header.css";

function Header() {
  return (
    <>
      <div className="header_container">
        <div className="header_wrapper">
          <div className="header_logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="header_links">
            <a href="">About</a>
            <a href="">NFTs</a>
            <a href="">Contest</a>
            <a href="">Prizes</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
