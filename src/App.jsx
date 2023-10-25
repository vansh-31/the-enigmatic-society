import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import { upcoming_events, past_events } from "./data";
function App() {
	const { set_upcoming_events, set_past_events } = useContext(AppContext);
	useEffect(() => {
		set_upcoming_events(upcoming_events);
		set_past_events(past_events);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	return (
		<div className="min-h-screen w-full max-w-[100vw] overflow-hidden">
			<Routes>
				<Route path="/" element={<NavBar></NavBar>}>
					<Route index element={<Home></Home>}></Route>
					<Route path="/events/" element={<Events></Events>}></Route>
					<Route path="/events/:eventName" element={<Event></Event>}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
