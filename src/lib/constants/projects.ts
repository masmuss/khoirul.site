import type { ProjectCollection } from "@/types";

export const projectData: ProjectCollection[] = [
	{
		title: "Website",
		projects: [
			{
				text: "IdeaHive",
				description: "Mind-mapping app by PENS Agile PBL and Agileteknik, Laravel, MySQL, Flutter",
				thumbnail: "ideahive.png",
				href: "https://secimap.agileteknik.com",
			},
			{
				text: "IoT Dashboard",
				description: "IoT Dashboard for monitoring and controlling IoT devices",
				thumbnail: "web-monitoring.png",
				href: "https://github.com/masmuss/next-hydroponic-monitoring",
			},
			{
				text: "PENS Aquaculture",
				description: "Dashboard for realtime water quality monitoring",
				href: "https://aquaculturepens.com",
			},
			{
				text: "ENT Satu Atap",
				description: "Super app used for administration at EEPIS News and Network Team",
				href: "https://ent.pens.ac.id",
			},
			{
				text: "Devtoolbox",
				description: "A web-based utility toolbox for developers.",
				thumbnail: "devtoolbox.png",
				href: "https://devtoolbox.khoirul.me",
			},
		],
	},
	{
		title: "API",
		projects: [
			{
				text: "Qasir API",
				description: "Learning NestJS by creating API for Point of Sales system",
				href: "https://github.com/masmuss/qasir-api",
			},
			{
				text: "Hono API Boilerplate",
				description:
					"An API boilerplate was built using Bun, Hono, drizzle ORM and integrated with Scalar API reference",
				href: "https://github.com/masmuss/hono-api-boilerplate",
			},
			{
				text: "eLibrary API",
				description: "An API for eLibrary system built with Hono, Bun, and Scalar API reference",
				thumbnail: "elibrary.png",
				href: "https://github.com/masmuss/hono-elibrary.git",
			},
		],
	},
	{
		title: "Mobile App",
		projects: [
			{
				text: "IoT Monitoring and Control",
				description: "IoT Monitoring and Control App for Hydroponic System, Flutter, Firebase",
				thumbnail: "mobile-monitoring.png",
				href: "https://github.com/masmuss/mobile-hydroponic-monitoring",
			},
		],
	},
	{
		title: "Artificial Intelligence",
		projects: [
			{
				text: "DSS for Hydroponic System",
				description:
					"Decision Support System for analyzing environmental data in hydroponic system using Sugeno Fuzzy Inference System",
				thumbnail: "dss-hydroponic.png",
				href: "https://github.com/masmuss/sugeno-fuzzy-simulator",
			},
		],
	},
];
