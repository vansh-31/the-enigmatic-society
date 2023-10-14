import { createContext,useState } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
	const [upcoming_events, set_upcoming_events] = useState([]);
	const [past_events, set_past_events] = useState([]);

	const value = {
		upcoming_events,
		set_upcoming_events,
		past_events,
		set_past_events,
	};
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};