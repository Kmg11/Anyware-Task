import { AnnouncementsBody } from "./AnnouncementsBody/AnnouncementsBody";
import { AnnouncementsHeader } from "./AnnouncementsHeader/AnnouncementsHeader";

export const Announcements = () => {
	return (
		<div className="bg-white mb-4 flex-1">
			<AnnouncementsHeader />
			<AnnouncementsBody />
		</div>
	);
};
