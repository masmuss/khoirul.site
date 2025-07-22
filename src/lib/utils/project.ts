import type { Project } from "@/types";
import { projectData } from "../constants/projects";

export function getAllProjects(limit = 10): Project[] {
	return projectData
		.flatMap((collection) => collection.projects)
		.slice(0, limit)
		.map((project) => ({
			...project,
			href: project.href || "#",
			thumbnail: project.thumbnail || "/src/assets/images/coming-soon.png",
		}));
}
