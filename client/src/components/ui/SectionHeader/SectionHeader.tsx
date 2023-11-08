import { Link } from "react-router-dom";

export interface SectionHeaderProps {
	title: string;
	description: string;
	allButton: string;
	to: string;
}

export const SectionHeader = ({
	allButton,
	description,
	title,
	to,
}: SectionHeaderProps) => {
	return (
		<header className="p-4 flex items-center gap-4 justify-between">
			<div className="flex flex-col gap-1">
				<h4 className="text-xl font-semibold text-primary">{title}</h4>
				<p className="text-sm text-gray-500 max-w-lg">{description}</p>
			</div>

			<Link to={to} className="text-blue-600 text-sm">
				{allButton}
			</Link>
		</header>
	);
};
