import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../../hooks/ThemeContext";
import { useEffect, useMemo, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";

const Particle = () => {
	const { theme } = useTheme();

	let bgColor = "#000000";
	let particlesColor = "#0aecec";

	switch (theme) {
		case "light-theme":
			bgColor = "#f5fbfb";
			particlesColor = "#00bcd4";
			break;
		case "neutro-theme":
			bgColor = "#000000";
			particlesColor = "#ffffff";
			break;
		case "colorful-theme":
			bgColor = "#022891";
			particlesColor = "#fff12c";
			break;
		default:
			bgColor = "#000000";
			particlesColor = "#0aecec";
			break;
	}

	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: bgColor,
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: [],
					},
					onHover: {
						enable: true,
						mode: "grab",
					},
				},
				modes: {
					grab: {
						distance: 300,
						links: {
							opacity: 1,
						},
					},
				},
			},
			particles: {
				color: {
					value: particlesColor,
				},
				links: {
					color: particlesColor,
					distance: 300,
					enable: true,
					opacity: 1,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 0.5,
				},
				shape: {
					type: "polygon",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[bgColor, particlesColor]
	);

	if (init) {
		return <Particles id="tsparticles" options={options} />;
	}

	return <></>;
};

export default Particle;
