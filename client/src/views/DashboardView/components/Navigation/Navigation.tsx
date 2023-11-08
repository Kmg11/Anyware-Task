import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { Logo } from "./Logo/Logo";
import { useClickOutside, useEsc } from "../../../../hooks";
import { Sidebar } from "./Sidebar/Sidebar";

export const Navigation = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen((p) => !p);
	const closeSidebar = () => setIsSidebarOpen(false);

	const navRef = useRef<HTMLDivElement | null>(null);

	useClickOutside(navRef, () => closeSidebar());
	useEsc(() => closeSidebar());

	return (
		<nav ref={navRef}>
			<div className="max-md:block md:hidden bg-white mb-4">
				<div className="container mx-auto px-4 py-4 flex items-center gap-4 justify-between">
					<Logo color="black" />

					<button onClick={toggleSidebar} className="text-primary text-xl">
						<FaBars />
					</button>
				</div>
			</div>

			<Sidebar isSidebarOpen={isSidebarOpen} />
		</nav>
	);
};
