import React from "react";
const Event = ({ title, description, image }) => {
	return (
		<a
			href="https://9qqirfue454.typeform.com/to/tEQPxFfL"
			target="_blank"
			rel="noreferrer"
		>
			<div className="w-full flex flex-col justify-center p-4">
				<img src={image} alt="" />
				<h3 className="font-bold text-lg">{title}</h3>
				<p className="text-gray-700">{description}</p>
			</div>
		</a>
	);
};

export default Event;
