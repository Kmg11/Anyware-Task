import { FaBell, FaEnvelope } from "react-icons/fa6";
import { IconButtonWithBadge } from "./IconButtonWithBadge/IconButtonWithBadge";
import { UserImage } from "./UserImage/UserImage";
import { useTranslation } from "react-i18next";

export const TopBar = () => {
	const { t } = useTranslation("dashboard");

	return (
		<div className="flex items-center gap-4 justify-between py-4 px-4 bg-white mb-4">
			<h2 className="text-4xl font-bold text-primary">
				{t("Dashboard.TopBar.Welcome")} Talia,
			</h2>

			<div className="flex items-center gap-8">
				<IconButtonWithBadge Icon={FaBell} badgeCount={5} />
				<IconButtonWithBadge Icon={FaEnvelope} badgeCount={5} />
				<UserImage />
			</div>
		</div>
	);
};
