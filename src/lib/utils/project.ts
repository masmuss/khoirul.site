import type { Project } from "@/types";
import { projectData } from "../constants/projects";

function resolveLinkTarget(project: Project): Pick<Project, "liveHref" | "repoHref" | "href"> {
	if (project.liveHref || project.repoHref) {
		return {
			liveHref: project.liveHref,
			repoHref: project.repoHref,
			href: project.liveHref ?? project.repoHref,
		};
	}

	if (!project.href) {
		return { href: "#" };
	}

	const isGitHubUrl = /github\.com/i.test(project.href);
	return {
		liveHref: isGitHubUrl ? undefined : project.href,
		repoHref: isGitHubUrl ? project.href : undefined,
		href: project.href,
	};
}

export function getAllProjects(limit = 10): Project[] {
	return projectData
		.flatMap((collection) => collection.projects)
		.slice(0, limit)
		.map((project) => ({
			...project,
			...resolveLinkTarget(project),
			thumbnail: project.thumbnail || "/src/assets/images/coming-soon.png",
		}));
}
