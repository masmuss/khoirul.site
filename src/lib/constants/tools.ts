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
				name: "Obsidian",
				description: "Knowledge base and note-taking",
				href: "https://obsidian.md/",
				iconPath: "obsidian",
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
				name: "Zed",
				description: "Collaborative code editor",
				href: "https://zed.dev/",
				iconPath: "zed",
			},
			{
				name: "Warp",
				description: "Modern terminal app",
				href: "https://www.warp.dev/",
				iconPath: "warp",
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
				name: "GitHub",
				description: "Code hosting and collaboration",
				href: "https://github.com/",
				iconPath: "github",
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
				name: "Go",
				description: "Language for scalable systems",
				href: "https://go.dev/",
				iconPath: "go",
			},
			{
				name: "PHP",
				description: "Server-side scripting language",
				href: "https://www.php.net/",
				iconPath: "php",
			},
			{
				name: "Dart",
				description: "Language for Flutter apps",
				href: "https://dart.dev/",
				iconPath: "dart",
			},
			{
				name: "Bash",
				description: "Unix shell and scripting language",
				href: "https://www.gnu.org/software/bash/",
				iconPath: "bash",
			},
		],
	},
	{
		title: "Databases",
		tools: [
			{
				name: "PostgreSQL",
				description: "Advanced relational database",
				href: "https://www.postgresql.org/",
				iconPath: "postgresql",
			},
			{
				name: "MySQL",
				description: "Popular relational database",
				href: "https://www.mysql.com/",
				iconPath: "mysql",
			},
			{
				name: "MongoDB",
				description: "NoSQL document database",
				href: "https://www.mongodb.com/",
				iconPath: "mongodb",
			},
			{
				name: "Redis",
				description: "In-memory data store",
				href: "https://redis.io/",
				iconPath: "redis",
			},
			{
				name: "Supabase",
				description: "Open source Firebase alternative",
				href: "https://supabase.com/",
				iconPath: "supabase",
			},
		],
	},
	{
		title: "Frameworks",
		tools: [
			{
				name: "Next.js",
				description: "React framework for production",
				href: "https://nextjs.org/",
				iconPath: "nextjs",
			},
			{
				name: "Astro",
				description: "Static site generator",
				href: "https://astro.build/",
				iconPath: "astro",
			},
			{
				name: "React.js",
				description: "Library for building UIs",
				href: "https://reactjs.org/",
				iconPath: "react",
			},
			{
				name: "Vue.js",
				description: "Progressive JavaScript framework",
				href: "https://vuejs.org/",
				iconPath: "vue",
			},
			{
				name: "Svelte",
				description: "Compiler-based UI framework",
				href: "https://svelte.dev/",
				iconPath: "svelte",
			},
			{
				name: "NestJS",
				description: "Progressive Node.js framework",
				href: "https://nestjs.com/",
				iconPath: "nest",
			},
			{
				name: "Hono",
				description: "Lightweight web framework",
				href: "https://hono.dev/",
				iconPath: "hono",
			},
			{
				name: "Express.js",
				description: "Minimal Node.js framework",
				href: "https://expressjs.com/",
				iconPath: "express",
			},
			{
				name: "Laravel",
				description: "PHP web application framework",
				href: "https://laravel.com/",
				iconPath: "laravel",
			},
			{
				name: "Flutter",
				description: "Cross-platform UI toolkit",
				href: "https://flutter.dev/",
				iconPath: "flutter",
			},
			{
				name: "Tailwind CSS",
				description: "Utility-first CSS framework",
				href: "https://tailwindcss.com/",
				iconPath: "tailwind",
			},
		],
	},
	{
		title: "Libraries & Tools",
		tools: [
			{
				name: "Bun",
				description: "Fast JavaScript runtime",
				href: "https://bun.sh/",
				iconPath: "bun",
			},
			{
				name: "Node.js",
				description: "JavaScript runtime engine",
				href: "https://nodejs.org/",
				iconPath: "nodejs",
			},
			{
				name: "Drizzle ORM",
				description: "TypeScript ORM for SQL",
				href: "https://orm.drizzle.team/",
				iconPath: "drizzle-orm",
			},
			{
				name: "Prisma",
				description: "Next-gen Node.js ORM",
				href: "https://www.prisma.io/",
				iconPath: "prisma",
			},
			{
				name: "TanStack",
				description: "Headless UI libraries",
				href: "https://tanstack.com/",
				iconPath: "tanstack",
			},
			{
				name: "Zod",
				description: "TypeScript schema validation",
				href: "https://zod.dev/",
				iconPath: "zod",
			},
			{
				name: "Vitest",
				description: "Fast unit test framework",
				href: "https://vitest.dev/",
				iconPath: "vitest",
			},
			{
				name: "Better Auth",
				description: "Authentication library",
				href: "https://better-auth.com/",
				iconPath: "better-auth",
			},
			{
				name: "Shadcn UI",
				description: "Radix UI + Tailwind components",
				href: "https://ui.shadcn.com/",
				iconPath: "shadcn-ui",
			},
			{
				name: "Prettier",
				description: "Opinionated code formatter",
				href: "https://prettier.io/",
				iconPath: "prettier",
			},
		],
	},
	{
		title: "Data Visualization",
		tools: [
			{
				name: "ChartJS",
				description: "Simple HTML5 charts",
				href: "https://www.chartjs.org/",
				iconPath: "chartjs",
			},
			{
				name: "D3",
				description: "Data-driven documents",
				href: "https://d3js.org/",
				iconPath: "D3",
			},
			{
				name: "Mermaid",
				description: "Diagrams from text",
				href: "https://mermaid-js.github.io/mermaid/",
				iconPath: "mermaid",
			},
		],
	},
	{
		title: "Infrastructure",
		tools: [
			{
				name: "Vercel",
				description: "Frontend cloud platform",
				href: "https://vercel.com/",
				iconPath: "vercel",
			},
			{
				name: "Cloudflare",
				description: "CDN and edge computing",
				href: "https://www.cloudflare.com/",
				iconPath: "cloudflare",
			},
		],
	},
];

export default TOOLS;
export type { Tool, ToolsCollection };
