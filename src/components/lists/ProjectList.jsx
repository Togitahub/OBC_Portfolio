import ProjectCard from "../cards/ProjectCard";

import { projectsData } from "../../data/projectsData";

const ProjectList = () => {
	const projectsLength = projectsData.length;

	return (
		<div
			className={`py-7 px-5 grid grid-cols-1 gap-10 ${
				projectsLength >= 4 ? "md:grid-cols-3 lg:grid-cols-4" : ""
			}`}
		>
			{projectsData.map((project) => (
				<ProjectCard
					key={project.id}
					project={project}
					length={projectsLength}
				/>
			))}
		</div>
	);
};

export default ProjectList;
