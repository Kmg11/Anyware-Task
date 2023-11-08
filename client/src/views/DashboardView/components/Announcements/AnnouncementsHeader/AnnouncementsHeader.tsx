import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../constants";
import { useTranslation } from "react-i18next";

export const AnnouncementsHeader = () => {
	const { t } = useTranslation("dashboard");

	return (
		<header className="p-4 flex items-center gap-4 justify-between">
			<div className="flex flex-col gap-1">
				<h4 className="text-xl font-semibold text-primary">
					{t("Dashboard.Announcements.Header.Title")}
				</h4>

				<p className="text-sm text-gray-500 max-w-lg">
					{t("Dashboard.Announcements.Header.Description")}
				</p>
			</div>

			<Link to={ROUTES.ANNOUNCEMENT} className="text-blue-600 text-sm">
				{t("Dashboard.Announcements.Header.All_Button")}
			</Link>
		</header>
	);
};
