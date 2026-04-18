export type Activity = {
	date: string;
	count: number;
	level: 0 | 1 | 2 | 3 | 4;
};

export type ApiResponse = {
	total: Record<string, number>;
	contributions: Activity[];
};

export async function fetchGitHubContributions(
	username: string,
	year: number | "last" = "last",
): Promise<Activity[]> {
	const apiUrl = "https://github-contributions-api.jogruber.de/v4/";
	const yearParam = String(year);

	try {
		const response = await fetch(`${apiUrl}${username}?y=${yearParam}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch GitHub contributions: ${response.statusText}`);
		}

		const data = (await response.json()) as ApiResponse;
		return data.contributions || [];
	} catch (error) {
		console.error("Error fetching GitHub contributions:", error);
		return [];
	}
}

export function groupByWeeks(
	activities: Activity[],
	weekStart: 0 | 1 = 0, // 0 = Sunday, 1 = Monday
): Array<Array<Activity | undefined>> {
	if (activities.length === 0) return [];

	const sortedActivities = [...activities].sort((a, b) => a.date.localeCompare(b.date));
	const firstActivity = sortedActivities[0];
	const lastActivity = sortedActivities[sortedActivities.length - 1];
	if (!firstActivity || !lastActivity) return [];

	const firstDate = new Date(firstActivity.date);
	const lastDate = new Date(lastActivity.date);

	// Get to start of week
	const startDate = new Date(firstDate);
	const dayDiff = (startDate.getDay() - weekStart + 7) % 7;
	startDate.setDate(startDate.getDate() - dayDiff);

	// Get to end of week
	const endDate = new Date(lastDate);
	const endDayDiff = (6 - ((endDate.getDay() - weekStart + 7) % 7)) % 7;
	endDate.setDate(endDate.getDate() + endDayDiff);

	// Create activity map
	const activityMap = new Map(activities.map((a) => [a.date, a]));

	// Build weeks
	const weeks: Array<Array<Activity | undefined>> = [];
	const currentDate = new Date(startDate);

	while (currentDate <= endDate) {
		const week: Array<Activity | undefined> = [];

		for (let i = 0; i < 7; i++) {
			const dateStr = currentDate.toISOString().split("T")[0] || "";
			week.push(activityMap.get(dateStr));
			currentDate.setDate(currentDate.getDate() + 1);
		}

		weeks.push(week);
	}

	return weeks;
}

export function getActivityLevel(count: number, allCounts: number[]): 0 | 1 | 2 | 3 | 4 {
	if (count === 0) return 0;

	const maxCount = Math.max(...allCounts);
	if (maxCount === 0) return 0;

	const normalized = count / maxCount;
	if (normalized < 0.25) return 1;
	if (normalized < 0.5) return 2;
	if (normalized < 0.75) return 3;
	return 4;
}

export function formatDate(dateStr: string): string {
	const date = new Date(`${dateStr}T00:00:00`);
	return date.toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
}

export function getTotalCount(activities: Activity[]): number {
	return activities.reduce((sum, activity) => sum + activity.count, 0);
}
