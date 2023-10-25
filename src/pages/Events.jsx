import React from "react";
import { Divider } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";
import { past_events } from "../data";
const Events = () => {
	const { upcoming_events } = useContext(AppContext);
	return (
		<div className="w-11/12 max-w-7xl mx-auto">
			<h1 className="text-4xl font-bold my-8 uppercase">Upcoming Events</h1>
			<Divider
				marginBottom="10"
				borderBottom="4px"
				orientation="horizontal"
			/>{" "}
			<div className="flex flex-col gap-y-12">
				{upcoming_events.length === 0 ? (
					<div className="flex justify-center items-center w-full min-h-[300px]">
						<h1 className="text-5xl font-bold text-gray-400 text-opacity-70 my-8 uppercase">
							Nothing to show
						</h1>
					</div>
				) : (
					upcoming_events.map((event, index) => (
						<Card key={index} {...event}></Card>
					))
				)}
			</div>
			<h1 className="text-4xl font-bold my-8 uppercase">Past Events</h1>
			<Divider
				marginBottom="10"
				borderBottom="4px"
				orientation="horizontal"
			/>{" "}
			<div className="flex flex-col gap-y-12">
				{past_events.length === 0 ? (
					<div className="flex justify-center items-center w-full min-h-[300px]">
						<h1 className="text-5xl font-bold text-gray-400 text-opacity-70 my-8 uppercase">
							Nothing to show
						</h1>
					</div>
				) : (
					past_events.map((event, index) => (
						<Card key={index} {...event}></Card>
					))
				)}
			</div>
		</div>
	);
};

export default Events;
