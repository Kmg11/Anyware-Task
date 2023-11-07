import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardView, HomeView } from "./views";
import "./lib/i18n";
import "./styles/index.css";
import { AuthGuard } from "./components";
import { ROUTES } from "./constants";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
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
		</BrowserRouter>
	</React.StrictMode>
);
