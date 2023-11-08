import {
	TopBar,
	DashboardHeader,
	Announcements,
	Navigation,
	Quizzes,
} from "./components";

export const DashboardView = () => {
	return (
		<main className="min-h-screen flex max-md:block bg-gray-100">
			<Navigation />

			<section className="flex-1 container mx-auto px-4">
				<TopBar />
				<DashboardHeader />

				<section className="flex gap-4 max-lg:flex-col">
					<Announcements />
					<Quizzes />
				</section>
			</section>
		</main>
	);
};
