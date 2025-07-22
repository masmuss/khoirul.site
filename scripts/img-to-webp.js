/** biome-ignore-all lint/style/useNodejsImportProtocol: This script is for Node.js and uses CommonJS modules. */
// This script converts images in the posts directory to WebP format.
// It processes all subdirectories and skips files that already have a .webp version.

const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

const targetDirs = [path.join(__dirname, "../src/content/post")];

async function processDirectory(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			await processDirectory(fullPath);
		} else if (entry.isFile()) {
			const ext = path.extname(entry.name).toLowerCase();
			if ([".png", ".jpg", ".jpeg"].includes(ext)) {
				const baseName = path.basename(entry.name, ext);
				const webpPath = path.join(dir, `${baseName}.webp`);

				try {
					await fs.access(webpPath);
					continue;
				} catch {}

				const buffer = await fs.readFile(fullPath);
				await sharp(buffer).webp({ quality: 80 }).toFile(webpPath);
				console.log(`Converted: ${fullPath} -> ${webpPath}`);

				// Optionally delete the original file
				await fs.unlink(fullPath);
				console.log(`Deleted original file: ${fullPath}`);
			}
		}
	}
}

(async () => {
	for (const dir of targetDirs) {
		await processDirectory(dir);
	}
})().catch(console.error);
