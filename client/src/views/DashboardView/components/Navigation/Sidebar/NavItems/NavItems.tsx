import {
	FaBook,
	FaBullhorn,
	FaCalendarDays,
	FaChartLine,
	FaGraduationCap,
	FaHouseChimney,
} from "react-icons/fa6";
import { ROUTES } from "../../../../../../constants";
import { NavItem, NavItemProps } from "./NavItem/NavItem";
import { useTranslation } from "react-i18next";

export const NavItems = () => {
	const { t } = useTranslation("dashboard");

	const navItems: NavItemProps[] = [
		{
			to: ROUTES.DASHBOARD,
			Icon: FaHouseChimney,
			label: t("Dashboard.Sidebar.Dashboard"),
		},
		{
			to: ROUTES.SCHEDULE,
			Icon: FaCalendarDays,
			label: t("Dashboard.Sidebar.Schedule"),
		},
		{
			to: ROUTES.COURSES,
			Icon: FaBook,
			label: t("Dashboard.Sidebar.Courses"),
		},
		{
			to: ROUTES.GRADEBOOK,
			Icon: FaGraduationCap,
			label: t("Dashboard.Sidebar.Gradebook"),
		},
		{
			to: ROUTES.PERFORMANCE,
			Icon: FaChartLine,
			label: t("Dashboard.Sidebar.Performance"),
		},
		{
			to: ROUTES.ANNOUNCEMENT,
			Icon: FaBullhorn,
			label: t("Dashboard.Sidebar.Announcement"),
		},
	];

	return (
		<ul className="flex flex-col gap-6 ps-2">
			{navItems.map((navItem, index) => (
				<NavItem key={index} {...navItem} />
			))}
		</ul>
	);
};
