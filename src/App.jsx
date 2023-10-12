import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
	return (
		<div className="min-h-screen w-full overflow-x-hidden overflow-y-scroll">
			<Routes>
				<Route path="/" element={<NavBar></NavBar>}></Route>
			</Routes>
		</div>
	);
}

export default App;
