import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ url, cardImage }) => {
	return (
		<NavLink to={url}>
			<img src={cardImage} className="w-full" alt="" />
		</NavLink>
	);
};

export default Card;
