import { Logo } from "./Logo/Logo";
import { NavItems } from "./NavItems/NavItems";

export const Sidebar = () => {
	return (
		<nav className="bg-primary py-4 flex flex-col gap-16 items-center">
			<Logo />
			<NavItems />
		</nav>
	);
};
