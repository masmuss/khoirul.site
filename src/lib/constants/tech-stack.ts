type Skill = {
	name: string;
	description: string;
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
				description: "Versatile scripting language"
			},
			{
				name: "TypeScript",
				description: "Typed superset of JavaScript"
			},
			{
				name: "Go",
				description: "Language for scalable systems"
			},
			{
				name: "PHP",
				description: "Server-side scripting language"
			},
			{
				name: "Dart",
				description: "Language for Flutter apps"
			},
			{
				name: "Bash",
				description: "Unix shell and scripting language"
			}
		]
	},
	{
		title: "Databases",
		skills: [
			{
				name: "PostgreSQL",
				description: "Advanced relational database"
			},
			{
				name: "MySQL",
				description: "Popular relational database"
			},
			{
				name: "MongoDB",
				description: "NoSQL document database"
			},
			{
				name: "Redis",
				description: "In-memory data store"
			},
			{
				name: "Supabase",
				description: "Open source Firebase alternative"
			}
		]
	},
	{
		title: "Frameworks",
		skills: [
			{
				name: "Next.js",
				description: "React framework for production"
			},
			{
				name: "Astro",
				description: "Static site generator"
			},
			{
				name: "React.js",
				description: "Library for building UIs"
			},
			{
				name: "Vue.js",
				description: "Progressive JavaScript framework"
			},
			{
				name: "Svelte",
				description: "Compiler-based UI framework"
			},
			{
				name: "Redux",
				description: "State container for JS apps"
			},
			{
				name: "NestJS",
				description: "Progressive Node.js framework"
			},
			{
				name: "Hono",
				description: "Lightweight web framework"
			},
			{
				name: "Express.js",
				description: "Minimal Node.js framework"
			},
			{
				name: "Laravel",
				description: "PHP web application framework"
			},
			{
				name: "Flutter",
				description: "Cross-platform UI toolkit"
			},
			{
				name: "Tailwind CSS",
				description: "Utility-first CSS framework"
			}
		]
	},
	{
		title: "Libraries & Tools",
		skills: [
			{
				name: "Bun",
				description: "Fast JavaScript runtime"
			},
			{
				name: "Node.js",
				description: "JavaScript runtime engine"
			},
			{
				name: "Drizzle ORM",
				description: "TypeScript ORM for SQL"
			},
			{
				name: "Prisma",
				description: "Next-gen Node.js ORM"
			},
			{
				name: "TanStack",
				description: "Headless UI libraries"
			},
			{
				name: "Zod",
				description: "TypeScript schema validation"
			},
			{
				name: "Vitest",
				description: "Fast unit test framework"
			},
			{
				name: "Playwright",
				description: "End-to-end testing for modern web apps"
			},
			{
				name: "Better Auth",
				description: "Authentication library"
			},
			{
				name: "Shadcn UI",
				description: "Radix UI + Tailwind components"
			},
			{
				name: "Swagger",
				description: "API design and documentation"
			},
			{
				name: "Prettier",
				description: "Opinionated code formatter"
			}
		]
	},
	{
		title: "Monitoring",
		skills: [
			{
				name: "OpenTelemetry",
				description: "Open-source observability framework"
			},
			{
				name: "Prometheus",
				description: "Open-source monitoring and alerting toolkit"
			},
			{
				name: "Grafana",
				description: "Open source analytics and monitoring solution"
			},
			{
				name: "Loki",
				description: "Log aggregation system"
			},
			{
				name: "Tempo",
				description: "Distributed tracing backend"
			},
			{
				name: "Sentry",
				description: "Application monitoring and error tracking"
			}
		]
	},
	{
		title: "Data Visualization",
		skills: [
			{
				name: "ChartJS",
				description: "Simple HTML5 charts"
			},
			{
				name: "D3",
				description: "Data-driven documents"
			},
			{
				name: "Mermaid",
				description: "Diagrams from text"
			}
		]
	},
	{
		title: "Infrastructure",
		skills: [
			{
				name: "Vercel",
				description: "Frontend cloud platform"
			},
			{
				name: "Cloudflare",
				description: "CDN and edge computing"
			}
		]
	}
];

export default TECH_STACK;
export type { Skill, SkillCollection };
