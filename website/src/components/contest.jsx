import React from "react";
import "../styles/contest.css";

function Contest() {
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const contests = [
    {
      name: "Neko Arcade",
      type: "Instant",
      poolSize: 100,
      userJoined: 0,
      prize: "150,000",
      winners: 10,
      price: 2000,
      qrcode: "",
    },
    {
      name: "Dumbo Arcade",
      type: "Instant",
      poolSize: 10,
      userJoined: 0,
      prize: "75,000",
      winners: 1,
      price: 10000,
      qrcode: "",
    },
    {
      name: "Simba Arcade",
      type: "Instant",
      poolSize: 5,
      userJoined: 0,
      prize: "85,000",
      winners: 1,
      price: 20000,
      qrcode: "",
    },
    {
      name: "Mufasa Arcade",
      type: "Monthly",
      poolSize: "∞",
      userJoined: 0,
      prize: "1,000,000",
      winners: 10,
      price: 5000,
      qrcode: "",
    },
    {
      name: "Bombalurina Arcade",
      type: "Quarterly",
      poolSize: "∞",
      userJoined: 0,
      prize: "2,500,000",
      winners: 10,
      price: 5000,
      qrcode: "",
    },
  ];

  return (
    <>
      <div className="contests">
        <div className="contest_container">
          <h3>Current Contests</h3>
          <div className="selection_bar">
            <sapn className="span1">All</sapn>
            <sapn className="span">Daily</sapn>
            <sapn className="span">Monthly</sapn>
          </div>
          <div className="All_card">
            {contests.map((constest, index) => {
              return (
                <>
                  <div
                    className={`${
                      activeIndex == index ? "show" : ""
                    } single_card`}
                  >
                    <div className="img_section">
                      <div className="cardContainer">
                        <div className="namebtn">
                          <p>{constest.name}</p>
                          <button>{constest.type}</button>
                        </div>
                        <div className="poolcontainer">
                          <div className="pool">
                            <p>Pool size</p>
                            <span>200</span>
                          </div>
                          <div className="usercontainer">
                            <p>User Joined</p>
                            <div className="num">
                              <span>41</span> of 200
                            </div>
                          </div>
                        </div>
                        <div className="winner">
                          <div className="cup">
                            <img src="/images/cup.png" alt="cup" />
                            <span>20,000 CATZ</span>
                          </div>
                          <span className="Lucky_winner">5 Lucky Winners</span>
                        </div>
                      </div>
                      <div className="dash_circle">
                        <div className="divCircle">
                          <span></span>
                          <p className="dashed"></p>
                          <span></span>
                        </div>
                      </div>
                      <div className="ticketcontainer">
                        <div className="ticket">
                          <p>Ticket Prize</p>
                          <span>100 CATZ</span>
                        </div>
                        <img
                          onClick={() => {
                            setActiveIndex(index);
                          }}
                          src="images/scan.png"
                          alt="scan"
                        />
                      </div>
                    </div>

                    <div className="img_section">
                      <div className="cardContainer_img">
                        <img src="/images/qrcode.png" alt="scan" />
                        <p className="cardContainer_p">Whales Arena</p>
                      </div>
                      <div className="divCircle">
                        <span></span>
                        <p className="dashed"></p>
                        <span></span>
                      </div>
                      <div className="ticketcontainer">
                        <div className="ticket">
                          <p>Ticket Prize</p>
                          <span>100 CATZ</span>
                        </div>
                        <img
                          onClick={() => {
                            setActiveIndex(-1);
                          }}
                          src="images/repeat.png"
                          alt="scan"
                        />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Contest;
