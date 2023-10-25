import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
	return (
		<div className="relative w-full min-h-[700px] bg-hero-section-bg-image-mobile bg-cover bg-center flex justify-center items-center sm:bg-hero-section-bg-image">
			<div className="text-center" >
				<h1 className="text-gray-200 text-3xl font-bold mb-4 sm:text-5xl md:text-7xl" >THE ENIGMATIC SOCIETY</h1>
				<h3 className="text-white text-lg sm:text-xl md:text-2xl" >GOVERNED BY THE ENIGMAS</h3>
			</div>
			<NavLink className="absolute bottom-5 right-8 px-10 py-3 bg-[#00BDD6] text-lg rounded-lg text-white">JOIN US</NavLink>
		</div>
	);
};

export default HeroSection;
