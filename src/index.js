import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AppContextProvider>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</AppContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
