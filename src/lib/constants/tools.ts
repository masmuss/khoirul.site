type Tool = {
	name: string;
	description: string;
	href: string;
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
			},
			{
				name: "Mozilla Firefox",
				description: "Open-source web browser",
				href: "https://www.firefox.com/en-US/",
			},
			{
				name: "Notion",
				description: "All-in-one workspace app",
				href: "https://www.notion.so/product",
			},
			{
				name: "Obsidian",
				description: "Knowledge base and note-taking",
				href: "https://obsidian.md/",
			},
			{
				name: "Raycast",
				description: "Launcher and productivity shortcuts",
				href: "https://www.raycast.com/",
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
			},
			{
				name: "JetBrains IDEs",
				description: "Professional IDEs for developers",
				href: "https://www.jetbrains.com/",
			},
			{
				name: "Zed",
				description: "Collaborative code editor",
				href: "https://zed.dev/",
			},
			{
				name: "Warp",
				description: "Modern terminal app",
				href: "https://www.warp.dev/",
			},
			{
				name: "Docker",
				description: "Containerization platform",
				href: "https://www.docker.com/",
			},
			{
				name: "HTTPie",
				description: "CLI HTTP client",
				href: "https://httpie.io/",
			},
			{
				name: "ChatGPT",
				description: "AI chatbot assistant",
				href: "https://chat.openai.com/",
			},
			{
				name: "GitHub",
				description: "Code hosting and collaboration",
				href: "https://github.com/",
			},
		],
	},
	{
		title: "Workstation",
		tools: [
			{
				name: "MacBook Air M1",
				description: '13.3", 8GB RAM (2020)',
				href: "https://www.apple.com/macbook-air/",
			},
			{
				name: "Lenovo L15 Mobile Monitor",
				description: '15.6" USB C Mobile Monitor',
				href: "https://www.lenovo.com/us/en/p/accessories-and-software/monitors/home/66e4ucc1us",
			},
			{
				name: "Logitech MX Anywhere 3S",
				description: "Wireless Mouse",
				href: "https://www.logitech.com/id-id/products/mice/mx-anywhere-3s-wireless-mouse.html",
			},
		],
	},
	{
		title: "Audio",
		tools: [
			{
				name: "Tangzu Wan'er SG 2 Emerald Jade Dragon",
				description: "10mm PET Single Dynamic In-Ear Earphones",
				href: "https://tangzu.net/products/tangzu-waner-sg-2-jade-dragon-edition-10mm-pet-single-dynamic-in-ear-earphones",
			},
		],
	},
];

export default TOOLS;
export type { Tool, ToolsCollection };
