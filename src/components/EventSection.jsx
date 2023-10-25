import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Events from "./Events";
import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
const EventSection = () => {
	const { upcoming_events, past_events } = useContext(AppContext);
	return (
		<>
			<div className="flex flex-col gap-y-6 my-20">
				<h1 className="text-center text-5xl font-bold text-gray-800">Events</h1>
				<Tabs isFitted isLazy variant="enclosed">
					<TabList mb="1em">
						<Tab>Upcoming Events</Tab>
						<Tab isDisabled >Past Events</Tab>
					</TabList>
					<TabPanels>
						<TabPanel>
							<Events events={upcoming_events}></Events>
						</TabPanel>
						<TabPanel>
							<Events events={past_events}></Events>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</div>
		</>
	);
};

export default EventSection;
