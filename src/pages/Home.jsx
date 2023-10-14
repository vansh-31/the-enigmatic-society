import React from "react";
import HeroSection from "../components/HeroSection";
import EventSection from "../components/EventSection";
const Home = () => {
	return (
		<>
			<HeroSection></HeroSection>
			<div className="w-11/12 max-w-7xl mx-auto mt-12">
				<EventSection></EventSection>
			</div>
		</>
	);
};

export default Home;
