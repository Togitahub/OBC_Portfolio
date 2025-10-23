import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = ["dark-theme", "light-theme", "neutro-theme", "colorful-theme"];

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || themes[0]
	);

	useEffect(() => {
		document.documentElement.classList.remove(...themes);
		document.documentElement.classList.add(theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const changeTheme = (newTheme) => {
		if (themes.includes(newTheme)) setTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, changeTheme, themes }}>
			{children}
		</ThemeContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
