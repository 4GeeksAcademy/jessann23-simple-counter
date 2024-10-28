import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

setInterval(()=>{
	const palabra=["Hola", "Mundo", "Programacion", "Javascript"]
	const IndiceAleatorio = Math.floor(Math.random() *palabra.length)
	console.log(palabra[IndiceAleatorio]);
	
},1000) 


let sec = 0
setInterval(()=>{
	const one= Math.floor((sec/1)%10)
	console.log(one)
	sec+= 1
}, 1000)



	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home;
