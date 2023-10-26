import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
// import {
// 	Card,
// 	CardBody,
// 	CardFooter,
// 	Heading,
// 	Text,
// 	Stack,
// 	Image,
// 	Button,
// } from "@chakra-ui/react";
const Event = () => {
	const [event, setEvent] = useState({}); // eslint-disable-line react-hooks/exhaustive-deps
	const { upcoming_events } = useContext(AppContext);
	const location = useLocation();
	const eventTitle = location.pathname.split("/").slice(-1)[0];
	useEffect(() => {
		const event = upcoming_events.filter(
			(event) => event.title.toLowerCase() === eventTitle.toLowerCase()
		)[0];
		setEvent(event);
	}, [upcoming_events]); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className="w-11/12 max-w-7xl mx-auto p-20">
			<div className="flex justify-between w-full">
				<div className="w-3/5 flex flex-col justify-center items-center gap-8 ">
					<h2>Event Name : {event.details.name}</h2>
					<h2>Event Date : {event.details.date}</h2>
					<h2>Event Time : {event.details.time}</h2>
					<h2>Event Duration : {event.details.duration}</h2>
					<h2>Event Fee : {event.details.fee}</h2>
				</div>
				<img className="w-2/5" src={event.poster} alt="" />
			</div>
			<div>
				{/* <Card
					direction={{ base: "column", sm: "row" }}
					overflow="hidden"
					variant="outline"
				>

					<Stack>
						<CardBody>
							<Heading size="md">The perfect latte</Heading>

							<Text py="2">
								Caffè latte is a coffee beverage of Italian origin made with
								espresso and steamed milk.
							</Text>
						</CardBody>

						<CardFooter>
							<Button variant="solid" colorScheme="blue">
								Buy Latte
							</Button>
						</CardFooter>
					</Stack>

					<Image
						objectFit="cover"
						maxW={{ base: "100%", sm: "200px" }}
						src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
						alt="Caffe Latte"
					/>
				</Card> */}
			</div>
		</div>
	);
};

export default Event;
