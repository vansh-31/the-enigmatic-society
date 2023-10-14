import React, { useState, useContext } from "react";
import { Tab } from "@headlessui/react";
import { AppContext } from "../context/AppContext";
import Events from "./Events";
const EventSection = () => {
	const { upcoming_events, past_events } = useContext(AppContext);
	const [tab, setTab] = useState(0);
	return (
		<div className="flex flex-col gap-y-6 my-20">
			<h1 className="text-center text-5xl font-bold text-gray-800">Events</h1>
			<div>
				<Tab.Group>
					<Tab.List className="flex justify-center gap-x-4">
						<Tab
							className={`px-10 py-2 text-lg rounded-lg  border-none outline-none ${
								tab === 0
									? "bg-[#00BDD6] text-white"
									: "text-[#00BDD6] bg-white"
							}`}
							onClick={(e) => {
								setTab(0);
							}}
						>
							Upcoming
						</Tab>
						<Tab
							className={`px-10 py-2 text-lg rounded-lg  border-none outline-none ${
								tab ? "bg-[#00BDD6] text-white" : "text-[#00BDD6] bg-white"
							}`}
							onClick={(e) => {
								setTab(1);
							}}
						>
							Past Events
						</Tab>
					</Tab.List>
				</Tab.Group>
			</div>
			<Events events={tab === 0 ? upcoming_events : past_events}></Events>
		</div>
	);
};

export default EventSection;
