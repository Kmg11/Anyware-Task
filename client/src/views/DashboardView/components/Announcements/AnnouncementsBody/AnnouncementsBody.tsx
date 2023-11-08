import { Announcement, AnnouncementProps } from "./Announcement/Announcement";
import UserImage from "../../../../../assets/images/user-image.avif";

const announcements: AnnouncementProps[] = [
	{
		userName: "John Doe",
		userImage: UserImage,
		department: "IT Department",
		announcement:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi quis nunc aliquam aliquet. Sed vitae nisi quis nunc aliquam aliquet.",
	},
	{
		userName: "John Doe",
		userImage: UserImage,
		department: "IT Department",
		announcement:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi quis nunc aliquam aliquet. Sed vitae nisi quis nunc aliquam aliquet.",
	},
	{
		userName: "John Doe",
		userImage: UserImage,
		department: "IT Department",
		announcement:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi quis nunc aliquam aliquet. Sed vitae nisi quis nunc aliquam aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi quis nunc aliquam aliquet. Sed vitae nisi quis nunc aliquam aliquet.",
	},
	{
		userName: "John Doe",
		userImage: UserImage,
		department: "IT Department",
		announcement:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi quis nunc aliquam aliquet. Sed vitae nisi quis nunc aliquam aliquet.",
	},
];

export const AnnouncementsBody = () => {
	return (
		<ul className="px-4 pb-4 flex flex-col gap-5">
			{announcements.map((announcement, index) => (
				<Announcement key={index} {...announcement} />
			))}
		</ul>
	);
};
