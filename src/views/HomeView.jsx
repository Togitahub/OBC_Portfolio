import {
	SiReact,
	SiPython,
	SiMongodb,
	SiExpress,
	SiNodedotjs,
	SiJavascript,
	SiTypescript,
	SiTailwindcss,
	SiAdobephotoshop,
	SiAdobeillustrator,
} from "react-icons/si";
import Button from "../components/common/Button";

const HomeView = () => {
	const iconClasses =
		"size-10 text-first transition-all duration-200 hover:scale-80 hover:text-third";

	const icons_first = [
		SiJavascript,
		SiMongodb,
		SiExpress,
		SiReact,
		SiNodedotjs,
	];
	const icons_second = [
		SiTailwindcss,
		SiTypescript,
		SiPython,
		SiAdobephotoshop,
		SiAdobeillustrator,
	];

	const renderIcons = (items) => {
		return (
			<div className="flex gap-4">
				{items.map((Icon, idx) => (
					<Icon key={idx} className={iconClasses} />
				))}
			</div>
		);
	};

	return (
		<div className="overflow-hidden flex flex-col gap-2 absolute top-0 z-10 h-screen w-full items-center justify-center">
			<div className="text-center px-4">
				<h1 className="text-transparent neon-font text-4xl md:text-5xl font-bold animate__animated animate__backInLeft">
					HI, I'M OSCAR BOLAÑOS CHACON
				</h1>
				<div className="animate__animated animate__backInRight">
					<h2 className="py-2 my-4 rounded-2xl text-third text-2xl md:text-3xl font-semibold animate-box-shadow-pulse">
						MY MAIN SKILLS
					</h2>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-3 justify-center animate__animated animate__backInRight">
				{renderIcons(icons_first)}
				{renderIcons(icons_second)}
			</div>
			<div className="mt-10 animate-floating">
				<Button
					variation={"link"}
					link={"/projects"}
					text={"CHECK MY PROYECTS"}
					isRoundedFull={true}
				/>
			</div>
		</div>
	);
};

export default HomeView;
