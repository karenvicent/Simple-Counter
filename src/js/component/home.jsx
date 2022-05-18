import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (valor) => {
	return (
		<div id="cajaPrincipal">
			<div className="box">
				<i className="far fa-clock"></i>
			</div>
			<div className="box">{valor.numero6}</div>
			<div className="box">{valor.numero5}</div>
			<div className="box">{valor.numero4}</div>
			<div className="box">{valor.numero3}</div>
			<div className="box">{valor.numero2}</div>
			<div className="box">{valor.numero1}</div>
		</div>
	);
};

export default Home;
