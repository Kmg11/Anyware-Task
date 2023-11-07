/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#17597d",
				lighterPrimary: "#4ecdc4",
			},
		},
	},
	plugins: [],
};
