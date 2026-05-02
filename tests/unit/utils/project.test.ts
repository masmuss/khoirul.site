import { describe, expect, it } from "vitest";
import { getAllProjects } from "@/lib/utils/project";

describe("Project Utils", () => {
	it("should return projects with resolved links", () => {
		const projects = getAllProjects(1);
		expect(projects.length).toBeGreaterThan(0);

		const project = projects[0];
		expect(project).toHaveProperty("text");
		expect(project).toHaveProperty("thumbnail");

		// Ensure thumbnail always has a path
		expect(project?.thumbnail).toBeDefined();
	});

	it("should limit the number of projects", () => {
		const limit = 2;
		const projects = getAllProjects(limit);
		expect(projects.length).toBeLessThanOrEqual(limit);
	});
});
