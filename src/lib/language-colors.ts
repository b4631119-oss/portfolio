const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572a5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00add8",
  Rust: "#dea584",
  Java: "#b07219",
  "C++": "#f34b7d",
  "C#": "#178600",
  PHP: "#4f5d95",
  Ruby: "#701516",
  Swift: "#f05138",
};

export function languageColor(language: string): string {
  return languageColors[language] ?? "#5b6560";
}
