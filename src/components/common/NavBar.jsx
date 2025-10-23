import Button from "./Button";
import LogoSvg from "./LogoSvg";
import ThemeChanger from "./ThemeChanger";

import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ id: 1, text: "Home", link: "/" },
		{ id: 2, text: "About", link: "/about" },
		{ id: 3, text: "Projects", link: "/projects" },
		{ id: 4, text: "Experience", link: "/experience" },
	];

	const wsLink = "https://wa.me/50670216172?text=Hola me interesa contratarte";

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const mobileMenuIcon = "text-first size-8 z-50 relative";
	const wsIconClasses =
		"size-8 text-first transition-all duration-300 hover:text-third hover:scale-90";

	return (
		<div>
			<div className="flex justify-center py-2"></div>
			<nav>
				{/* Normal Navbar */}
				<div className="hidden lg:flex flex-col relative z-20 items-center">
					<div className="w-15 mt-5 rounded-full h-1 bg-first animate-width-expand-collapse"></div>
					<div className="flex items-center w-full justify-center">
						<div className="flex w-4xl justify-center gap-3 h-auto py-3 rounded-2xl ">
							<Button
								variation={"link"}
								link={"/"}
								icon={<LogoSvg width={"w-22"} />}
							/>
							<div className="w-0.5 bg-first"></div>
							<div className="flex gap-3">
								{navItems.map((item) => (
									<Button
										key={item.id}
										text={item.text}
										color={"default"}
										link={item.link}
										variation={"nav-link"}
									/>
								))}
							</div>
							<div className="w-0.5 bg-first"></div>
							<div>
								<ThemeChanger />
							</div>
							<div className="w-0.5 bg-first"></div>
							<div>
								<Button
									variation={"anchor"}
									link={wsLink}
									icon={<IoLogoWhatsapp className={wsIconClasses} />}
								/>
							</div>
						</div>
					</div>
					<div className="w-15 rounded-full h-1 bg-first animate-width-expand-collapse"></div>
				</div>

				{/* Mobile Button */}
				<div className="lg:hidden flex items-center justify-between border-2 border-first rounded-2xl mx-2 px-5 py-4 relative z-50">
					<Button
						variation={"link"}
						link={"/"}
						icon={<LogoSvg width={"w-20"} />}
					/>
					<ThemeChanger />
					<Button
						type={"button"}
						onClick={toggleMenu}
						icon={
							isMenuOpen ? (
								<BiX className={mobileMenuIcon} />
							) : (
								<BiMenu className={mobileMenuIcon} />
							)
						}
					/>
				</div>

				{/* Mobile NavBar */}
				<div
					className={`lg:hidden backdrop-blur-xs fixed inset-0 z-30 transition-transform duration-300 ${
						isMenuOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className="flex flex-col items-center justify-center h-full gap-6">
						<div className="flex flex-col gap-3">
							{navItems.map((item) => (
								<Button
									key={item.id}
									text={item.text}
									color={"default"}
									link={item.link}
									variation={"nav-link"}
									onClick={toggleMenu}
								/>
							))}
						</div>
						<div className="w-full h-0.5 bg-first max-w-xs"></div>
						<Button
							variation={"anchor"}
							link={wsLink}
							icon={
								<IoLogoWhatsapp className="size-10 text-first transition-all duration-300 hover:text-third hover:scale-90" />
							}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
