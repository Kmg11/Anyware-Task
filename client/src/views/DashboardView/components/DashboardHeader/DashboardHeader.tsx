import { useTranslation } from "react-i18next";

export const DashboardHeader = () => {
	const { t } = useTranslation("dashboard");

	return (
		<header className="bg-white py-4 px-4 mb-4">
			<h3
				className="
					text-4xl font-bold uppercase text-lighterPrimary mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-lighterPrimary
				"
			>
				{t("Dashboard.Header.Title")}
			</h3>

			<p className="text-gray-500 mb-2">{t("Dashboard.Header.Description")}</p>

			<p className="text-lighterPrimary mb-3">
				"{t("Dashboard.Header.Quote")}"
			</p>

			<button className="bg-lighterPrimary text-white font-bold py-2 px-6 rounded uppercase">
				{t("Dashboard.Header.View_Exams_Tips_Button")}
			</button>
		</header>
	);
};
