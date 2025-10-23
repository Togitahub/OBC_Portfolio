import Button from "../common/Button";

const ProjectCard = ({ project, length }) => {
	const Icon = project.icon;

	return (
		<div className="flex justify-center">
			<div
				className={`h-90 w-xs ${
					length < 4 ? "md:w-2xl" : ""
				} flex flex-col gap-3 items-center justify-center shadow-md shadow-third/50 text-first bg-first/20 bg-cover bg-center rounded-2xl border-b-2 border-first transition-all duration-300 hover:scale-110 hover:border-third hover:text-third`}
			>
				<h2 className="font-semibold text-2xl">{project.name}</h2>
				<Icon className="size-10" />
				<Button
					variation={"link"}
					link={`/projects/${project.id}`}
					text={"DETALLES"}
				/>
				<div className="flex flex-wrap justify-center items-center gap-4 mt-4 w-50">
					{project.techs.map((Tech, idx) => (
						<Tech key={idx} className="size-7" />
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
