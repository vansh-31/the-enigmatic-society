import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ title, image }) => {
	console.log(image);
	return (
		<NavLink to={`/events/${title}`}>
			<img src={image} className="w-full" alt="" />
		</NavLink>
	);
};

export default Card;
