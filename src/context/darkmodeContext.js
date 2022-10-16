import { createContext, useReducer } from "react";
import { DarkModeReducer } from "./darkModereducer";

const INITIAL_STATE = {
	darkMode: false,
};

//this is a way how we can make a value can be acceesible within all component, without using state
export const DarkModeContext = createContext(INITIAL_STATE);

//in order to to reach this initial state we need to provide the context provider
//children will be all of the app, starting from Home (the root of the app)// something like this.. <Context><Home/></Context>
// check index.js... it is wrapped like <DarkModeContextProvider> <App /> </DarkModeContextProvider>
export const DarkModeContextProvider = ({ children }) => {
	//reducer hook
	const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

	return (
		<DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
			{children}
		</DarkModeContext.Provider>
	);
};
