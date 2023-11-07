import { useTranslation } from "react-i18next";

export const HomeView = () => {
	const { t } = useTranslation("home");

	return <h2>{t("Welcome")}</h2>;
};
