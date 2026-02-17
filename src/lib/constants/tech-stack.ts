type Skill = {
	name: string;
	description: string;
	href: string;
	iconPath: string;
};

type SkillCollection = {
	title: string;
	skills: Skill[];
};

const TECH_STACK: SkillCollection[] = [
	{
		title: "Languages",
		skills: [
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
		skills: [
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
		skills: [
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
				name: "Redux",
				description: "State container for JS apps",
				href: "https://redux.js.org/",
				iconPath: "redux",
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
		skills: [
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
				name: "Playwright",
				description: "End-to-end testing for modern web apps",
				href: "https://playwright.dev/",
				iconPath: "playwright",
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
				name: "Swagger",
				description: "API design and documentation",
				href: "https://swagger.io/",
				iconPath: "swagger",
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
		skills: [
			{
				name: "Grafana",
				description: "Open source analytics and monitoring solution",
				href: "https://grafana.com/",
				iconPath: "grafana",
			},
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
		skills: [
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

export default TECH_STACK;
export type { Skill, SkillCollection };
