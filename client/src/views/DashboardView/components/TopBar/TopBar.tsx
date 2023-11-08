import {
	FaArrowRightFromBracket,
	FaBell,
	FaEnvelope,
	FaGlobe,
} from "react-icons/fa6";
import { IconButtonWithBadge } from "./IconButtonWithBadge/IconButtonWithBadge";
import UserImage from "../../../../assets/images/user-image.avif";
import { useTranslation } from "react-i18next";
import { UserAvatar } from "../../../../components";
import { LANGS, LOCAL_STORAGE, ROUTES } from "../../../../constants";
import { useNavigate } from "react-router-dom";

export const TopBar = () => {
	const { t, i18n } = useTranslation("dashboard");
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem(LOCAL_STORAGE.ACCESS_TOKEN);
		navigate(ROUTES.HOME);
	};

	const changeLanguage = () => {
		const isEn = i18n.language === LANGS.EN;
		i18n.changeLanguage(isEn ? LANGS.AR : LANGS.EN);
		document.dir = isEn ? "rtl" : "ltr";
	};

	return (
		<div
			className="
				flex items-center gap-4 justify-between py-4 px-4 bg-white mb-4
				max-sm:flex-col max-sm:gap-6
			"
		>
			<h2 className="text-4xl font-bold text-primary">
				{t("Dashboard.TopBar.Welcome")} Talia,
			</h2>

			<div className="flex items-center flex-wrap gap-8">
				<IconButtonWithBadge Icon={FaBell} badgeCount={5} />
				<IconButtonWithBadge Icon={FaEnvelope} badgeCount={5} />
				<IconButtonWithBadge Icon={FaGlobe} onClick={changeLanguage} />
				<IconButtonWithBadge Icon={FaArrowRightFromBracket} onClick={logout} />
				<UserAvatar img={UserImage} size="md" />
			</div>
		</div>
	);
};
