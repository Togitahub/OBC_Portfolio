import { Link, NavLink } from "react-router-dom";

const Button = ({
	type,
	text,
	link,
	icon,
	color,
	onClick,
	disabled,
	variation,
	personalized,
	extraClasses,
	isRoundedFull = false,
}) => {
	let colorClasses = "";

	const base = `${
		isRoundedFull ? "rounded-full p-3 shadow-md shadow-third/30" : "rounded px-4 py-1"
	} cursor-pointer text-center font-bold transition-all duration-300 hover:scale-90`;
	const active = `${base} bg-first text-main scale-90`;

	switch (color) {
		case "second":
			colorClasses = "bg-main text-second hover:bg-second hover:text-main";
			break;
		case "third":
			colorClasses = "bg-third text-main hover:bg-first hover:text-main";
			break;
		case "active-first":
			colorClasses = active;
			break;
		case "red":
			colorClasses = "bg-red-500 text-white hover:bg-red-700";
			break;
		case "green":
			colorClasses = "bg-green-500 text-white hover:bg-green-700";
			break;
		default:
			colorClasses =
				"bg-main text-first border-2 hover:bg-first hover:text-main";
			break;
	}

	const isIcon = icon ? "" : `${extraClasses} ${base} ${colorClasses}`;
	const classes = personalized ? personalized : isIcon;
	const content = icon ? icon : text;

	if (variation === "nav-link") {
		return (
			<NavLink
				to={link}
				onClick={onClick}
				className={({ isActive }) => (isActive ? active : classes)}
			>
				{content}
			</NavLink>
		);
	}

	if (variation === "link") {
		return (
			<Link to={link} className={classes}>
				{content}
			</Link>
		);
	}

	if (variation === "anchor") {
		return (
			<a
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className={classes}
			>
				{content}
			</a>
		);
	}

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={classes}
		>
			{content}
		</button>
	);
};

export default Button;
