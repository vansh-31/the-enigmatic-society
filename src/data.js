// const upcoming_events = [
// 	{
// 		title: "Event 1",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 1 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Event 2",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 2 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Event 3",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 3 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Event 4",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 4 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Event 5",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 5 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Event 6",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 6 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// ];
// const past_events = [
// 	{
// 		title: "Past Event 1",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 1 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Past Event 2",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 2 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Past Event 3",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 3 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Past Event 4",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 4 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Past Event 5",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 5 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// 	{
// 		title: "Past Event 6",
// 		date: "2021-01-01",
// 		time: "00:00:00",
// 		description: "Event 6 Description",
// 		image: "https://via.placeholder.com/150",
// 	},
// ];
import enigmaticFiestaCardImage from "./static/images/enigmatic-fiesta-event-card.png";
import enigmaticFiestaPoster from "./static/images/enigmatic-fiesta-event-poster.png";
const upcoming_events = [
	{
		title: "enigmatic-fiesta",
		details: {
			name: "Enigmatic Fiesta",
			date: "2023-11-04",
			time: "12:00:00",
			duration: "3hrs",
			fee: "Duo Registration for ₹40",
		},
		rounds: [
			{
				name: "🪅🎈 Pinata Party 🎈🪅",
				desc: `Unleash your inner child as you break open the colorful pinatas!  surprises and laughter await you in this thrilling stage. 🍬🥳`,
			},
			{
				name: "🏃‍♂️ Hurdle Race 🏃‍♀️",
				desc: `Gear up for an adrenaline-pumping obstacle race! Navigate through hurdles and conquer challenges with your partner. Who will emerge as the ultimate hurdle-busting duo? 🏅💨`,
			},
			{
				name: "🎇 Grand Finale 🎇",
				desc: `The climax of the Enigmatic Fiesta! A dazzling showcase of talent, mystery, and entertainment. Witness jaw-dropping performances, and be ready for a few surprises. 🌟✨`,
			},
		],
		cardImage: enigmaticFiestaCardImage,
		poster: enigmaticFiestaPoster,
		url: "/events/enigmatic-fiesta",
		registrationURL: "https://9qqirfue454.typeform.com/to/tEQPxFfL",
	},
];
const past_events = [];
export { upcoming_events, past_events };
