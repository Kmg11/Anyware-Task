import { SectionHeader } from "../../../../components";
import { ROUTES } from "../../../../constants";
import { AnnouncementsBody } from "./AnnouncementsBody/AnnouncementsBody";
import { useTranslation } from "react-i18next";

export const Announcements = () => {
	const { t } = useTranslation("dashboard");

	return (
		<div className="bg-white mb-4 flex-1">
			<SectionHeader
				title={t("Dashboard.Announcements.Header.Title")}
				description={t("Dashboard.Announcements.Header.Description")}
				allButton={t("Dashboard.Announcements.Header.All_Button")}
				to={ROUTES.ANNOUNCEMENT}
			/>

			<AnnouncementsBody />
		</div>
	);
};
