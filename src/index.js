import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkmodeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* so we will wrap this app with Context */}
		<DarkModeContextProvider>
			<App />
		</DarkModeContextProvider>
	</React.StrictMode>
);
