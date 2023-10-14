import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
function App() {
	return (
		<div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden overflow-y-auto">
			<Routes>
				<Route path="/" element={<NavBar></NavBar>}>
					<Route index element={<Home></Home>}></Route>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
