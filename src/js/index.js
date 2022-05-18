//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
	ReactDOM.render(
		<Home
			numero6={Math.floor((counter / 100000) % 10)}
			numero5={Math.floor((counter / 10000) % 10)}
			numero4={Math.floor((counter / 1000) % 10)}
			numero3={Math.floor((counter / 100) % 10)}
			numero2={Math.floor((counter / 10) % 10)}
			numero1={Math.floor((counter / 1) % 10)}
		/>,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
