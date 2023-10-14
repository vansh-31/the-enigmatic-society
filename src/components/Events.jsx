import React from "react";
import Slider from "react-slick";
import Event from "./Event";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

function NextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<MdArrowForwardIos
			className={className}
			style={{
				...style,
				color: "gray",
				width: "50px",
				height: "50px",
				position: "absolute",
				right: "-50px",
				opacity: "0.4",
			}}
			onClick={onClick}
		/>
	);
}

function PrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<MdArrowBackIos
			className={className}
			style={{
				...style,
				color: "gray",
				width: "50px",
				height: "50px",
				position: "absolute",
				right: "-50px",
				opacity: "0.4",
			}}
			onClick={onClick}
		/>
	);
}

const Events = ({ events }) => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};
	return (
		<div className="w-full">
			<Slider {...settings}>
				{events.map((event, index) => (
					<Event key={index} {...event}></Event>
				))}
			</Slider>
		</div>
	);
};

export default Events;