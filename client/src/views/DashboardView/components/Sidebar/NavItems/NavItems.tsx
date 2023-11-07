import {
	FaBook,
	FaBullhorn,
	FaCalendarDays,
	FaChartLine,
	FaGraduationCap,
	FaHouseChimney,
} from "react-icons/fa6";
import { ROUTES } from "../../../../../constants";
import { NavItem, NavItemProps } from "./NavItem/NavItem";

const navItems: NavItemProps[] = [
	{
		to: ROUTES.DASHBOARD,
		Icon: FaHouseChimney,
		label: "Dashboard",
	},
	{
		to: ROUTES.SCHEDULE,
		Icon: FaCalendarDays,
		label: "Schedule",
	},
	{
		to: ROUTES.COURSES,
		Icon: FaBook,
		label: "Courses",
	},
	{
		to: ROUTES.GRADEBOOK,
		Icon: FaGraduationCap,
		label: "Gradebook",
	},
	{
		to: ROUTES.PERFORMANCE,
		Icon: FaChartLine,
		label: "Performance",
	},
	{
		to: ROUTES.ANNOUNCEMENT,
		Icon: FaBullhorn,
		label: "Announcement",
	},
];

export const NavItems = () => {
	return (
		<ul className="flex flex-col gap-6 ps-2">
			{navItems.map((navItem, index) => (
				<NavItem key={index} {...navItem} />
			))}
		</ul>
	);
};
