import { useTranslation } from "react-i18next";

const ExperienceCard = ({ exp }) => {
	const { i18n } = useTranslation();
	const currentLang = i18n.language;
	const translation = exp.translations[currentLang];

	return (
		<div className="w-90 md:w-2xl p-5 bg-main/50 border-y-2 border-y-first rounded-2xl animate__animated animate__zoomInDown">
			<div className="font-semibold text-center text-third py-2 border-b-2 border-b-first rounded-2xl">
				<h2 className="text-3xl">{translation.role}</h2>
				<h3 className="text-2xl">{exp.company}</h3>
				<p className="text-lg text-third/70 mt-2">
					{translation.startDate} - {translation.endDate}
				</p>
			</div>
			<ul className="list-disc text-third text-lg px-2 py-4">
				{translation.tasks.map((t) => (
					<li key={t.id} className="mt-4">
						{t.description}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceCard;
