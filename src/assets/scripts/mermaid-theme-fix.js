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
	observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
	observer.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });

	// Also patch after Astro SPA navigation
	document.addEventListener("astro:after-swap", restoreMermaidDiagrams);

	// Initial run (in case theme is set on load)
	restoreMermaidDiagrams();
})();
