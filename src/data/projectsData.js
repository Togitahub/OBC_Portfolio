import hero_catalog from "/assets/images/catalog/hero.png";
import admin_catalog from "/assets/images/catalog/admin.png";
import hero_library from "/assets/images/library/hero_library.png";
import hero_catalog_white from "/assets/images/catalog/hero_white.png";
import admin_catalog_white from "/assets/images/catalog/admin_white.png";
import hero_calculator from "/assets/images/calculator/hero_calculator.png";

import { IoCarSportSharp, IoBook, IoCalculator } from "react-icons/io5";
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
				name: "MBV Vehicle Sales CRM-DMS",
				description:
					"Full-featured Dealer Management System (DMS) built for a vehicle import and sales business, using the MERN stack with GraphQL. It manages vehicle inventory, clients and their payments, general expenses/income, company balance, and exchange rates, all through an admin dashboard with accounting reports and a per-vehicle profit simulator. Includes role-based authentication, WhatsApp integration for client contact, and image uploads via Cloudinary.",
			},
			"es-419": {
				name: "Venta de Vehículos MBV CRM-DMS",
				description:
					"Sistema integral de gestión (DMS) para una empresa de importación y venta de vehículos, desarrollado con stack MERN + GraphQL. Permite administrar el inventario de autos, clientes y sus pagos, gastos e ingresos generales, balance de la empresa y tipos de cambio, todo desde un panel administrativo con reportes contables y un simulador de rentabilidad por vehículo. Incluye autenticación por roles, integración con WhatsApp para contacto con clientes y carga de imágenes vía Cloudinary.",
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
	{
		id: 3,
		translations: {
			en: {
				name: "Import Calculator",
				description:
					"Robust web system providing an accurate and detailed estimation of total import costs (including tariffs, VAT, logistics, and customs fees). It allows users to simulate multiple international purchasing scenarios, which is vital for optimizing budgeting and financial decision-making. Showcases solid full-stack development skills and complex financial logic handling.",
			},
			"es-419": {
				name: "Calculadora de Importación",
				description:
					"Sistema web robusto que ofrece una estimación precisa y detallada de costos totales de importación (incluye aranceles, IVA, costos logísticos y tasas aduaneras). Permite a los usuarios simular múltiples escenarios de compra internacional, lo que resulta vital para optimizar la presupuestación y la toma de decisiones financieras. Demuestra habilidades sólidas en desarrollo full-stack y manejo de lógica financiera compleja.",
			},
		},
		link: "https://calculadora-mbv.vercel.app/",
		images: [hero_calculator],
		icon: IoCalculator,
		techs: [SiJavascript, SiReact, SiCss3, SiBootstrap],
	},
];
