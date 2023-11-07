import { TopBar, Sidebar, DashboardHeader } from "./components";

export const DashboardView = () => {
	return (
		<main className="min-h-screen flex">
			<Sidebar />

			<section className="flex-1 bg-gray-100 container mx-auto px-4">
				<TopBar />
				<DashboardHeader />
			</section>
		</main>
	);
};
