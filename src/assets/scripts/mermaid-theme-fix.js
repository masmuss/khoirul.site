// mermaid-theme-fix.js
// Fixes astro-mermaid theme switching bug by restoring original diagram code before re-rendering

(() => {
	function restoreMermaidDiagrams() {
		document.querySelectorAll("pre.mermaid").forEach((diagram) => {
			if (diagram.hasAttribute("data-diagram")) {
				diagram.textContent = diagram.getAttribute("data-diagram") || "";
				diagram.removeAttribute("data-processed");
			} else {
				diagram.setAttribute("data-diagram", diagram.textContent || "");
			}
		});
	}

	// Listen for theme changes on html/body
	const observer = new MutationObserver(() => {
		restoreMermaidDiagrams();
	});
	const rootEl = document.documentElement;
	const bodyEl = document.body;
	if (rootEl && typeof rootEl === "object") {
		observer.observe(rootEl, { attributes: true, attributeFilter: ["data-theme"] });
	}
	if (bodyEl && typeof bodyEl === "object") {
		observer.observe(bodyEl, { attributes: true, attributeFilter: ["data-theme"] });
	}

	// Also patch after Astro SPA navigation
	document.addEventListener("astro:after-swap", restoreMermaidDiagrams);

	// Initial run (in case theme is set on load)
	restoreMermaidDiagrams();
})();
