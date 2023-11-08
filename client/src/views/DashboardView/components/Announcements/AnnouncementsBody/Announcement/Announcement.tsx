import { UserAvatar } from "../../../../../../components";

export interface AnnouncementProps {
	userImage: string;
	userName: string;
	department: string;
	announcement: string;
}

export const Announcement = ({
	announcement,
	department,
	userImage,
	userName,
}: AnnouncementProps) => {
	return (
		<li className="flex gap-6">
			<div className="flex gap-3 items-center">
				<UserAvatar img={userImage} />

				<div className="flex flex-col">
					<h4 className="font-medium text-sm">{userName}</h4>
					<p className="text-xs text-gray-500">{department}</p>
				</div>
			</div>

			<p className="flex-1 text-sm text-gray-500">{announcement}</p>
		</li>
	);
};
