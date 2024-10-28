import React, { useState, useEffect } from "react";
import Card from "./card"



const Home = () => {

	const [sec, setSec] = useState(0);
	const [digits, setDigits] = useState([]);

	useEffect(() => {


		const interval = setInterval(() => {
			setSec(prevSec => prevSec + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const newDigits = [
			Math.floor((sec / 100000) % 10),
			Math.floor((sec / 10000) % 10),
			Math.floor((sec / 1000) % 10),
			Math.floor((sec / 100) % 10),


			Math.floor((sec / 10) % 10),
			Math.floor(sec % 10),
		];

		setDigits(newDigits)
	}, [sec]);

return(


<div className="container-fluid mt-9">
			<div className="row justify-content-center">
				{digits.map((digit, index) => (
					<div key={index} className="col-2" style={{ padding: '0' }}>
						<Card numero={digit} 
						isClock={index === 0}
						/>
					</div>
				))}
			</div>
		</div>
	);
};



export default Home
