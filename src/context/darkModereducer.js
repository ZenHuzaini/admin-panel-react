export const DarkModeReducer = (state, action) => {
	switch (action.type) {
		case "DAY": {
			return { darkMode: false };
		}
		case "NIGHT": {
			return { darkMode: true };
		}
		case "TOGGLE": {
			return { darkMode: !state.darkMode };
		}
		default: {
			return state;
		}
	}
};
