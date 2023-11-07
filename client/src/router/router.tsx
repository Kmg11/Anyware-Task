import { createBrowserRouter } from "react-router-dom";
import { HomeView, DashboardView } from "../views";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeView />,
	},
	{
		path: "/dashboard",
		element: <DashboardView />,
	},
]);
