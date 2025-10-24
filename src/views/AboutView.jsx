import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profile from "/assets/profile.jpg";
import Button from "../components/common/Button";
import { useTranslation } from "react-i18next";

const AboutView = () => {
	const iconClasses =
		"size-10 text-first transition-all duration-200 hover:scale-80 hover:text-third";

	const { t } = useTranslation();

	return (
		<div className="absolute top-0 z-10 w-full h-screen overflow-y-auto overflow-x-hidden flex flex-col items-center justify-center">
			<div className="p-4 flex flex-col items-center lg:flex-row gap-x-2 gap-y-10 h-100">
				<div className="w-auto px-4 border-x-2 h-70 border-x-first rounded-2xl animate__animated animate__flipInY">
					<img
						src={profile}
						alt=""
						className="rounded-full object-cover w-50 h-50 shadow-md shadow-first transition-transform duration-200 hover:scale-110"
					/>
					<div className="flex justify-center gap-3 py-5">
						<Button
							variation={"anchor"}
							link={"https://www.linkedin.com/in/oscaranbocha/"}
							icon={<AiFillLinkedin className={iconClasses} />}
						/>
						<Button
							variation={"anchor"}
							link={"https://github.com/Togitahub"}
							icon={<AiFillGithub className={iconClasses} />}
						/>
					</div>
				</div>
				<div className="w-md md:w-3xl flex flex-col gap-3 items-center px-10 animate__animated animate__flipInX">
					<h2 className="text-third text-center text-3xl font-bold">
						Oscar Bolaños Chacon
					</h2>
					<p className="text-third text-justify text-lg font-medium bg-main/50 border-y-5 border-first rounded-2xl px-4 py-3">
						{t("about_description")}
					</p>
					<div className="animate-floating mt-5">
						<Button
							variation={"anchor"}
							text={t("buttons.hire")}
							isRoundedFull={true}
							link={
								"https://wa.me/50670216172?text=Hola me interesa contratarte"
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutView;
