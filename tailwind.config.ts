import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: "rgba(var(--background))",
			border: "rgba(var(--border))",
			card: "rgba(var(--card))",
			"copy-primary": "rgba(var(--copy-primary))",
			"copy-secondary": "rgba(var(--copy-secondary))",
			cta: "rgba(var(--cta))",
			"cta-active": "rgba(var(--cta-active))",
			"cta-text": "rgba(var(--cta-text))",
			grape: "rgba(var(--grape))",
			"dark" : "#232a3c",
			"medium": "#293245"
			
  		},
		fontFamily: {
			inter: ["var(--font-inter)"]
		},
		screens: {
			"sm" : "10px",
			"md" : "768px",
			"lg": "1024px",
			"xl": "1280px",
			"2xl": "1536px"
		}
  	}
  }
} satisfies Config;
