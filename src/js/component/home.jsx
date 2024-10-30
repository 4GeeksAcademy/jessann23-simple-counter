import React from "react";
import Card from "./card.jsx";

let seconds = 0;
let interval;

const updateDigits = (newSeconds) => {
  return [
    Math.floor((newSeconds / 100000) % 10),
    Math.floor((newSeconds / 10000) % 10),
    Math.floor((newSeconds / 1000) % 10),
    Math.floor((newSeconds / 100) % 10),
    Math.floor((newSeconds / 10) % 10),
    Math.floor(newSeconds % 10)
  ];
};


const startTimer = (setDigits) => {
  interval = setInterval(() => {
    seconds += 1;
    const newDigits = updateDigits(seconds);

    console.log(newDigits);
    setDigits(newDigits);
  }, 1000);
};

const Home = () => {
  const [digits, setDigits] = React.useState(Array(7).fill(0));


  React.useEffect(() => {
    startTimer(setDigits);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid mt-4">
            <div className="row justify-content-center">
                {digits.map((digit, index) => (
                    <div key={index} className="col-2" style={{ padding: "0" }}>
                        <Card isClock={index === "isClock"} numero={index ==="isClock"  ? '' : digit} />
                    


          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
