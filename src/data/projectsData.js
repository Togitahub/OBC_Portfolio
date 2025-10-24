import hero_catalog from "/assets/images/catalog/hero.png";
import admin_catalog from "/assets/images/catalog/admin.png";
import hero_library from "/assets/images/library/hero_library.png";
import hero_catalog_white from "/assets/images/catalog/hero_white.png";
import admin_catalog_white from "/assets/images/catalog/admin_white.png";

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
		translations: {
			en: {
				name: "Vehicles Sales Catalog",
				description:
					"Full-stack vehicle inventory management system built with Node.js, Express, GraphQL (Apollo Server), MongoDB, and React. Features a public catalog with advanced search and filtering capabilities, alongside a comprehensive admin panel for CRUD operations on vehicles, brands, and models. Implements JWT authentication, Cloudinary integration for image management, and real-time inventory statistics. This scalable solution streamlines dealership operations while providing customers with an intuitive, responsive interface for browsing available vehicles.",
			},
			"es-419": {
				name: "Catalogo de Venta de Vehículos",
				description:
					"Sistema full-stack de gestión de inventario de vehículos construido con Node.js, Express, GraphQL (Apollo Server), MongoDB y React. Incluye un catálogo público con funciones avanzadas de búsqueda y filtrado, junto con un panel de administración completo para operaciones CRUD sobre vehículos, marcas y modelos. Implementa autenticación JWT, integración con Cloudinary para la gestión de imágenes y estadísticas de inventario en tiempo real. Esta solución escalable optimiza las operaciones del concesionario y ofrece a los clientes una interfaz intuitiva y responsive para explorar los vehículos disponibles.",
			},
		},
		link: "https://importacionesmbv.com/",
		images: [
			hero_catalog,
			admin_catalog,
			hero_catalog_white,
			admin_catalog_white,
		],
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
		translations: {
			en: {
				name: "Virtual Library",
				description:
					"Full-stack application developed using Python (Django) and JavaScript (React) to create a platform for managing and viewing educational digital resources. 🖥️ It allows users to organize, search, and access a virtual collection of books and documents in an intuitive and efficient manner. This robust system enhances the online learning experience and bibliographic content management.",
			},
			"es-419": {
				name: "Biblioteca Virtual",
				description:
					"Aplicación full-stack desarrollada con Python (Django) y JavaScript (React) para crear una plataforma para gestionar y visualizar recursos educativos digitales. Permite a los usuarios organizar, buscar y acceder a una colección virtual de libros y documentos de forma intuitiva y eficiente. Este sistema robusto mejora la experiencia de aprendizaje en línea y la gestión de contenidos bibliográficos.",
			},
		},
		link: "https://github.com/Togitahub/Biblioteca-Virtual",
		images: [hero_library],
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
