import React from "react";
import enigmaticFiestaEventImage from "../static/images/enigmatic-fiesta-event.png";
const Card = ({ title, description, image }) => {
	return (
		<div>
			<img src={enigmaticFiestaEventImage} alt="" />
		</div>
	);
};

export default Card;
