import { Logo } from "../Logo/Logo";
import { NavItems } from "./NavItems/NavItems";

interface SidebarProps {
	isSidebarOpen: boolean;
}

export const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
	return (
		<aside
			className={`
				bg-primary py-4 flex flex-col gap-16 items-center h-full min-h-screen z-50
				max-md:fixed max-md:top-0 max-md:start-0 max-md:bottom-0 max-md:overflow-auto transition
				${isSidebarOpen ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
			`}
		>
			<Logo />
			<NavItems />
		</aside>
	);
};
