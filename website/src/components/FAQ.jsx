import React from "react";
import "../styles/faq.css";

function Faq() {
  const [activeIndex, setActiveIndex] = React.useState(-1);
  const Data = [
    {
      question: "How To Play The Game?",
      answer:
        "No Presale! No Private Sale! But you can provide Liquidity for Lucky Cats before launch to earn a share of trading fees and huge crypto rewards.",
    },
    {
      question: "Benefits of providing a liquidity?",
      answer:
        "No Presale! No Private Sale! But you can provide Liquidity for Lucky Cats before launch to earn a share of trading fees and huge crypto rewards.",
    },
    {
      question: "When are you launching your project?",
      answer:
        "No Presale! No Private Sale! But you can provide Liquidity for Lucky Cats before launch to earn a share of trading fees and huge crypto rewards.",
    },
    {
      question: "Will i be consoled if i lost a game?",
      answer:
        "No Presale! No Private Sale! But you can provide Liquidity for Lucky Cats before launch to earn a share of trading fees and huge crypto rewards.",
    },
  ];
  return (
    <>
      <div className="faq">
        <h4>FAQ</h4>
        <div className="question_wrapper">
          {Data.map((data, index) => {
            return (
              <>
                <div className="question">
                  <div
                    className="toogle1"
                    onClick={() => {
                      if (activeIndex == index) {
                        setActiveIndex(-1);
                        return;
                      }

                      setActiveIndex(index);
                    }}
                  >
                    <h3 className={activeIndex == index ? "newH3" : "oldH3"}>
                      {data.question}
                    </h3>
                    <span className={activeIndex == index ? "btn3" : "btn2"}>
                      {activeIndex == index ? "-" : "+"}
                    </span>
                  </div>
                  <p
                    className={
                      activeIndex == index ? "questionpp" : "questionp"
                    }
                  >
                    {data.answer}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Faq;
