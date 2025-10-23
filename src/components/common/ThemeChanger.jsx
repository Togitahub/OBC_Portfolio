import Button from "./Button";

import { useTheme } from "../../hooks/ThemeContext";
import { BiSun, BiMoon, BiColor, BiSolidYinYang } from "react-icons/bi";

const ThemeChanger = () => {
	const { theme, themes, changeTheme } = useTheme();

	const iconClasses = (isActive) =>
		`cursor-pointer size-8 ${
			isActive
				? "text-third animate-pulse"
				: "text-first transition-all duration-300 hover:text-third hover:scale-90"
		}`;

	return (
		<div className="flex items-center gap-2 h-full">
			{themes.map((t) => (
				<Button
					key={t}
					type={"button"}
					onClick={() => changeTheme(t)}
					icon={
						t === "dark-theme" ? (
							<BiMoon className={iconClasses(t === theme)} />
						) : t === "light-theme" ? (
							<BiSun className={iconClasses(t === theme)} />
						) : t === "neutro-theme" ? (
							<BiSolidYinYang className={iconClasses(t === theme)} />
						) : (
							<BiColor className={iconClasses(t === theme)} />
						)
					}
				/>
			))}
		</div>
	);
};

export default ThemeChanger;
