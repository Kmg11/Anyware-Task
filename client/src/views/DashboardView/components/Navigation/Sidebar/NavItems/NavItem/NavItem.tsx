import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../../../../../../constants";

export interface NavItemProps {
	to: (typeof ROUTES)[keyof typeof ROUTES];
	Icon: IconType;
	label: string;
}

export const NavItem = ({ to, Icon, label }: NavItemProps) => {
	const { pathname } = useLocation();
	const isPathActive = pathname === to;

	return (
		<li>
			<Link
				to={to}
				className={`
					text-white flex items-center gap-6 px-6 py-4 transition
					${
						isPathActive
							? "bg-white !text-lighterPrimary font-medium"
							: "hover:bg-white !hover:text-lighterPrimary font-medium"
					}
			`}
			>
				<span className="text-2xl">
					<Icon />
				</span>

				<span className="text-xl">{label}</span>
			</Link>
		</li>
	);
};
