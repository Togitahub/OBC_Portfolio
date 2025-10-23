import experiences from "../../data/experiencesData.json";
import ExperienceCard from "../cards/ExperienceCard";

const ExperienceList = () => {
	return (
		<div className="flex flex-col gap-10 items-center justify-center py-10">
			{experiences.map((exp) => (
				<ExperienceCard key={exp.id} exp={exp} />
			))}
		</div>
	);
};

export default ExperienceList;
