import { useTranslation } from "react-i18next";
import { FaClipboardCheck, FaHourglassStart } from "react-icons/fa6";

interface QuizProps {
	title: string;
	info: { course: string; topic: string; dueTo: string };
	type: "quiz" | "assignment";
}

export const Quiz = ({ info, title, type }: QuizProps) => {
	const { t } = useTranslation("dashboard");

	return (
		<section>
			<h4 className="mb-3 text-lighterPrimary flex items-center gap-3 font-bold">
				<span className="text-2xl">
					{type === "quiz" ? <FaHourglassStart /> : <FaClipboardCheck />}
				</span>

				{title}
			</h4>

			<ul className="flex flex-col gap-1 mb-4 text-sm text-gray-400">
				<li>
					{t("Dashboard.Quizzes.Body.Info.Course")}: {info.course}
				</li>

				<li>
					{t("Dashboard.Quizzes.Body.Info.Topic")}: {info.topic}
				</li>

				<li>
					{t("Dashboard.Quizzes.Body.Info.Due_To")}: {info.dueTo}
				</li>
			</ul>

			<button className="border-2 border-lighterPrimary text-lighterPrimary px-4 py-2 rounded-md font-semibold w-full hover:bg-lighterPrimary hover:text-white transition">
				{type === "quiz"
					? t("Dashboard.Quizzes.Body.Start_QUiz_Button")
					: t("Dashboard.Quizzes.Body.Solve_Assignment_Button")}
			</button>
		</section>
	);
};
