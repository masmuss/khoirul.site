type Tool = {
	name: string;
	description: string;
	href: string;
	iconPath: string;
};

type ToolsCollection = {
	title: string;
	tools: Tool[];
};

const TOOLS: ToolsCollection[] = [
	{
		title: "Design",
		tools: [
			{
				name: "Figma",
				description: "UI/UX design and prototyping tool",
				href: "https://www.figma.com/",
				iconPath: "figma",
			},
		],
	},
	{
		title: "Productivity",
		tools: [
			{
				name: "Arc",
				description: "Modern web browser",
				href: "https://arc.net/",
				iconPath: "arc",
			},
			{
				name: "Mozilla Firefox",
				description: "Open-source web browser",
				href: "https://www.firefox.com/en-US/",
				iconPath: "firefox",
			},
			{
				name: "Notion",
				description: "All-in-one workspace app",
				href: "https://www.notion.so/product",
				iconPath: "notion",
			},
			{
				name: "Raycast",
				description: "Launcher and productivity shortcuts",
				href: "https://www.raycast.com/",
				iconPath: "raycast",
			},
		],
	},
	{
		title: "Development",
		tools: [
			{
				name: "VS Code",
				description: "Popular code editor",
				href: "https://code.visualstudio.com/",
				iconPath: "vscode",
			},
			{
				name: "JetBrains IDEs",
				description: "Professional IDEs for developers",
				href: "https://www.jetbrains.com/",
				iconPath: "jetbrains",
			},
			{
				name: "Docker",
				description: "Containerization platform",
				href: "https://www.docker.com/",
				iconPath: "docker",
			},
			{
				name: "HTTPie",
				description: "CLI HTTP client",
				href: "https://httpie.io/",
				iconPath: "httpie",
			},
			{
				name: "ChatGPT",
				description: "AI chatbot assistant",
				href: "https://chat.openai.com/",
				iconPath: "chatgpt",
			},
			{
				name: "Warp",
				description: "Modern terminal app",
				href: "https://www.warp.dev/",
				iconPath: "warp",
			},
			{
				name: "Zed",
				description: "Collaborative code editor",
				href: "https://zed.dev/",
				iconPath: "zed",
			},
		],
	},
	{
		title: "Languages",
		tools: [
			{
				name: "JavaScript",
				description: "Versatile scripting language",
				href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				iconPath: "javascript",
			},
			{
				name: "TypeScript",
				description: "Typed superset of JavaScript",
				href: "https://www.typescriptlang.org/",
				iconPath: "typescript",
			},
			{
				name: "PHP",
				description: "Server-side scripting language",
				href: "https://www.php.net/",
				iconPath: "php",
			},
			{
				name: "Bash",
				description: "Unix shell and scripting language",
				href: "https://www.gnu.org/software/bash/",
				iconPath: "bash",
			},
			{
				name: "Dart",
				description: "Language for Flutter apps",
				href: "https://dart.dev/",
				iconPath: "dart",
			},
		],
	},
	{
		title: "Frameworks",
		tools: [
			{
				name: "Next.js",
				description: "React framework for web apps",
				href: "https://nextjs.org/",
				iconPath: "nextjs",
			},
			{
				name: "Tailwind CSS",
				description: "Utility-first CSS framework",
				href: "https://tailwindcss.com/",
				iconPath: "tailwind",
			},
			{
				name: "Laravel",
				description: "PHP web application framework",
				href: "https://laravel.com/",
				iconPath: "laravel",
			},
			{
				name: "Express.js",
				description: "Minimal Node.js web framework",
				href: "https://expressjs.com/",
				iconPath: "express",
			},
			{
				name: "Hono",
				description: "Lightweight Node.js web framework",
				href: "https://hono.dev/",
				iconPath: "hono",
			},
			{
				name: "NestJS",
				description: "Progressive Node.js framework",
				href: "https://nestjs.com/",
				iconPath: "nest",
			},
			{
				name: "Astro",
				description: "Static site generator",
				href: "https://astro.build/",
				iconPath: "astro",
			},
			{
				name: "Flutter",
				description: "UI toolkit for cross-platform apps",
				href: "https://flutter.dev/",
				iconPath: "flutter",
			},
		],
	},
	{
		title: "Linraries",
		tools: [
			{
				name: "Bun",
				description: "JavaScript runtime environment",
				href: "https://bun.sh/",
				iconPath: "bun",
			},
			{
				name: "ChartJS",
				description: "JS charting for data visualization",
				href: "https://www.chartjs.org/",
				iconPath: "chartjs",
			},
			{
				name: "D3",
				description: "JS library for data visualizations",
				href: "https://d3js.org/",
				iconPath: "D3",
			},
			{
				name: "Drizzle ORM",
				description: "TypeScript ORM for SQL",
				href: "https://orm.drizzle.team/",
				iconPath: "drizzle-orm",
			},
			{
				name: "Mermaid",
				description: "Generate diagrams from text",
				href: "https://mermaid-js.github.io/mermaid/",
				iconPath: "mermaid",
			},
			{
				name: "Node.js",
				description: "JavaScript runtime engine",
				href: "https://nodejs.org/",
				iconPath: "nodejs",
			},
			{
				name: "Prettier",
				description: "Opinionated code formatter",
				href: "https://prettier.io/",
				iconPath: "prettier",
			},
			{
				name: "React.js",
				description: "UI library for building interfaces",
				href: "https://reactjs.org/",
				iconPath: "react",
			},
			{
				name: "Shadcn UI",
				description: "Radix UI + Tailwind components",
				href: "https://ui.shadcn.com/",
				iconPath: "shadcn-ui",
			},
			{
				name: "Zod",
				description: "TypeScript schema validation",
				href: "https://zod.dev/",
				iconPath: "zod",
			},
		],
	},
];

export default TOOLS;
export type { Tool, ToolsCollection };
