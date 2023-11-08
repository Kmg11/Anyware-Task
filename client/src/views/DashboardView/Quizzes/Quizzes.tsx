import { useTranslation } from "react-i18next";
import { SectionHeader } from "../../../components";
import { Quiz } from "./Quiz/Quiz";
import { ROUTES } from "../../../constants";

export const Quizzes = () => {
	const { t } = useTranslation("dashboard");

	return (
		<section className="bg-white mb-4">
			<SectionHeader
				title={t("Dashboard.Quizzes.Header.Title")}
				description={t("Dashboard.Quizzes.Header.Description")}
				allButton={t("Dashboard.Quizzes.Header.All_Button")}
				to={ROUTES.DASHBOARD}
			/>

			<section className="px-4 pb-4 pt-2 flex flex-col gap-8">
				<Quiz
					title="Unit 2 quiz"
					info={{ course: "Math", topic: "Algebra", dueTo: "12/12/2021" }}
					type="quiz"
				/>

				<Quiz
					title="12-12 Assignment"
					info={{ course: "Math", topic: "Algebra", dueTo: "12/12/2021" }}
					type="assignment"
				/>
			</section>
		</section>
	);
};
