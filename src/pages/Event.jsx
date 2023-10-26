import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loader from "../components/Loader";
import {
	Card,
	CardBody,
	CardFooter,
	Heading,
	Text,
	Stack,
	Image,
	Button,
} from "@chakra-ui/react";
const Event = () => {
	const [event, setEvent] = useState(false); // eslint-disable-line react-hooks/exhaustive-deps
	const { upcoming_events, loading, setLoading } = useContext(AppContext);
	const location = useLocation();
	useEffect(() => {
		setLoading(true);
		setEventDetails();
		setLoading(false);
	}, [event, location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps
	const setEventDetails = () => {
		const eventTitle = location.pathname.split("/").slice(-1)[0];
		const event = upcoming_events.filter(
			(event) => event.title.toLowerCase() === eventTitle.toLowerCase()
		)[0];
		setEvent(event);
	};
	return loading ? (
		<Loader></Loader>
	) : (
		event && (
			<div className="w-11/12 max-w-7xl mx-auto p-20 border my-8 border-gray-400 rounded-lg">
				<div className="flex justify-between w-full">
					<div className="w-3/5 flex flex-col justify-evenly  gap-8 ">
						<h2 className="text-3xl font-bold">
							Event Name : {event.details.name}
						</h2>
						<h2 className="text-3xl font-bold">
							Event Date : {event.details.date}
						</h2>
						<h2 className="text-3xl font-bold">
							Event Time : {event.details.time}
						</h2>
						<h2 className="text-3xl font-bold">
							Event Duration : {event.details.duration}
						</h2>
						<h2 className="text-3xl font-bold">
							Event Fee : {event.details.fee}
						</h2>
					</div>
					<img className="w-2/5 p-8" src={event.poster} alt="" />
				</div>
				<div>
					{event.rounds.map((round, index) => {
						return (
							<Card
								key={index}
								justifyContent="space-between"
								marginY="8"
								direction={{ base: "column", sm: "row" }}
								overflow="hidden"
								variant="outline"
							>
								<Stack>
									<CardBody>
										<Heading size="md">{round.name}</Heading>

										<Text py="6">{round.desc}</Text>
									</CardBody>
								</Stack>

								<Image
									objectFit="cover"
									maxW={{ base: "100%", sm: "150px" }}
									src={round.image}
									alt="Caffe Latte"
								/>
							</Card>
						);
					})}
					<a href={event.registrationURL} target="_blank" rel="noreferrer">
						<Button colorScheme="teal" size="lg" >Register Now</Button>
					</a>
				</div>
			</div>
		)
	);
};

export default Event;
