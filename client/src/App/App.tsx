import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { DashboardView, HomeView } from "../views";
import { AuthGuard } from "../components";
import { ROUTES } from "../constants";
import { useTranslation } from "react-i18next";

export const App = () => {
	const { i18n } = useTranslation("dashboard");

	useEffect(() => {
		document.dir = i18n.dir();
	}, [i18n]);

	return (
		<Routes>
			<Route path={ROUTES.HOME} Component={HomeView} />

			<Route
				path={ROUTES.DASHBOARD}
				element={
					<AuthGuard>
						<DashboardView />
					</AuthGuard>
				}
			/>
		</Routes>
	);
};
