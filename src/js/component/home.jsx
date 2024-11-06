import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.jsx";

let seconds = 0;

const updateDigits = () => {
  seconds += 1;

  const digitFour = Math.floor((seconds / 1000) % 10);
  const digitThree = Math.floor((seconds / 100) % 10);
  const digitTwo = Math.floor((seconds / 10) % 10);
  const digitOne = Math.floor((seconds / 1) % 10);

  ReactDOM.render(
    <Home digitOne={digitOne} digitTwo={digitTwo} digitThree={digitThree} digitFour={digitFour} />,
    document.querySelector("#app")
  );
};

const Home = ({ digitOne, digitTwo, digitThree, digitFour }) => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-2" style={{ padding: "0" }}>
          <Card isClock={true} numero={""} />
        </div>
        <div className="col-2" style={{ padding: "0" }}>
          <Card isClock={false} numero={digitFour} />
        </div>
        <div className="col-2" style={{ padding: "0" }}>
          <Card isClock={false} numero={digitThree} />
        </div>
        <div className="col-2" style={{ padding: "0" }}>
          <Card isClock={false} numero={digitTwo} />
        </div>
        <div className="col-2" style={{ padding: "0" }}>
          <Card isClock={false} numero={digitOne} />
        </div>
      </div>
    </div>
  );
};


setInterval(updateDigits, 1000);

export default Home;
