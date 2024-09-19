import "../styles/bottompart.css";

function SocialIcon() {
  return (
    <>
      <div className="social_wrapper">
        <div className="social_container">
          <div className="lucky_cat">
            <img src="/images/lucky.png" alt="png" />
            <span>Lucky Cats</span>
          </div>

          <div className="nft_wrapper">
            <span>Whitepaper</span>
            <span>NFTs</span>
            <span>Contact Us</span>
          </div>
          <div className="socials">
            <img src="/images/tel.png" alt="socials" />
            <img src="/images/twit.png" alt="socials" />
            <img src="/images/insta.png" alt="socials" />
            <img src="/images/fb.png" alt="socials" />
          </div>
        </div>
        <p>Copyright 2022. All right Reserved by Lucky Cats</p>
      </div>
    </>
  );
}

export default SocialIcon;
