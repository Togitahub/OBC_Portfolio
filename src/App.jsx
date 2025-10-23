import { Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ProjectView from "./views/ProjectView";
import ProjectsView from "./views/ProjectsView";
import NavBar from "./components/common/NavBar";
import NotFoundView from "./views/NotFoundView";
import Particle from "./components/common/Particle";
import ExperiencesView from "./views/ExperienceView";

function App() {
	return (
		<div className="bg-main">
			<NavBar />
			<Routes>
				<Route path="/" element={<HomeView />} />
				<Route path="/about" element={<AboutView />} />
				<Route path="/projects" element={<ProjectsView />} />
				<Route path="/projects/:id" element={<ProjectView />} />
				<Route path="/experience" element={<ExperiencesView />} />

				<Route path="*" element={<NotFoundView />} />
			</Routes>
			<Particle />
		</div>
	);
}

export default App;
