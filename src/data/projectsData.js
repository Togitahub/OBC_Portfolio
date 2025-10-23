import { IoCarSportSharp, IoBook } from "react-icons/io5";

import {
	SiJavascript,
	SiMongodb,
	SiExpress,
	SiReact,
	SiNodedotjs,
	SiGraphql,
	SiTailwindcss,
	SiJsonwebtokens,
	SiPython,
	SiFlask,
	SiCss3,
	SiBootstrap,
	SiSqlalchemy,
} from "react-icons/si";

export const projectsData = [
	{
		id: 1,
		name: "Vehicles Sales Catalog",
		description:
			"Full-stack vehicle inventory management system built with Node.js, Express, GraphQL (Apollo Server), MongoDB, and React. Features a public catalog with advanced search and filtering capabilities, alongside a comprehensive admin panel for CRUD operations on vehicles, brands, and models. Implements JWT authentication, Cloudinary integration for image management, and real-time inventory statistics. This scalable solution streamlines dealership operations while providing customers with an intuitive, responsive interface for browsing available vehicles.",
		icon: IoCarSportSharp,
		techs: [
			SiJavascript,
			SiMongodb,
			SiExpress,
			SiReact,
			SiNodedotjs,
			SiGraphql,
			SiTailwindcss,
			SiJsonwebtokens,
		],
	},
	{
		id: 2,
		name: "Virtual Library",
		description:
			"Full-stack application developed using Python (Django) and JavaScript (React) to create a platform for managing and viewing educational digital resources. 🖥️ It allows users to organize, search, and access a virtual collection of books and documents in an intuitive and efficient manner. This robust system enhances the online learning experience and bibliographic content management.",
		icon: IoBook,
		techs: [
			SiJavascript,
			SiReact,
			SiPython,
			SiFlask,
			SiCss3,
			SiBootstrap,
			SiSqlalchemy,
			SiJsonwebtokens,
		],
	},
];
