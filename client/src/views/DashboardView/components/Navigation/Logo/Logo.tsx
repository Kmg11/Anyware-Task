interface LogoProps {
	color?: "black" | "white";
}

export const Logo = ({ color = "white" }: LogoProps) => {
	return (
		<h1
			className={`
				text-3xl font-bold
				${color === "white" ? "text-white" : "text-gray-950"}
			`}
		>
			Coligo
		</h1>
	);
};
