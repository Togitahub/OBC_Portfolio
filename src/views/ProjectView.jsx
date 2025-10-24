import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

import { useTranslation } from "react-i18next";
import Button from "../components/common/Button";

const ProjectView = () => {
	const { id } = useParams();
	const intId = Number(id);

	const { t, i18n } = useTranslation();
	const currentLang = i18n.language;

	const project = projectsData.find((p) => p.id === intId);

	return (
		<div className="relative z-10 flex flex-col gap-5 items-center py-10 px-5">
			<h1 className="text-5xl text-first border-2 rounded-2xl px-3 py-4">
				{project.translations[currentLang].name}
			</h1>
			<div className="w-full text-justify md:text-lg text-first md:font-medium bg-main border-2 rounded-2xl p-4 mt-4">
				{project.translations[currentLang].description}
			</div>
			<div className="flex flex-col justify-center gap-3 text-first">
				<h2 className="text-3xl text-center">{t("technologies")}</h2>
				<div className="flex justify-center gap-3">
					{project.techs.map((Tech, idx) => (
						<Tech key={idx} className="size-8" />
					))}
				</div>
			</div>
			<div className="mt-10 animate-floating">
				<Button
					variation={"anchor"}
					link={project.link}
					text={t("buttons.project_site")}
					isRoundedFull={true}
				/>
			</div>
			<div className="w-full opacity-75">
				<img
					src={project.images.cover}
					alt="catalog_cover"
					className="rounded-2xl"
				/>
			</div>
		</div>
	);
};

export default ProjectView;
