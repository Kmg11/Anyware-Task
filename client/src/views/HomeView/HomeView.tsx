import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE, ROUTES } from "../../constants";

export const HomeView = () => {
	const { t } = useTranslation("home");
	const navigate = useNavigate();

	const signin = () => {
		localStorage.setItem(LOCAL_STORAGE.ACCESS_TOKEN, "token is valid");
		navigate(ROUTES.DASHBOARD);
	};

	return (
		<main className="flex items-center justify-center flex-col gap-5 min-h-screen">
			<h1 className="text-5xl font-bold">{t("Title")}</h1>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase"
				onClick={signin}
			>
				{t("signin")}
			</button>
		</main>
	);
};
