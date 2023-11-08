import { IconType } from "react-icons";

interface IconButtonWithBadgeProps {
	Icon: IconType;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	badgeCount?: number;
}

export const IconButtonWithBadge = ({
	Icon,
	onClick,
	badgeCount = 0,
}: IconButtonWithBadgeProps) => {
	return (
		<button className="relative" onClick={onClick}>
			<span className="text-primary text-2xl">
				<Icon />
			</span>

			{badgeCount > 0 && (
				<span
					className="
						absolute z-10 top-0 right-0 -translate-y-1/2 translate-x-1/2
						bg-lighterPrimary text-white
						w-6 h-6 rounded-full
						flex items-center justify-center
						border-white border-2
					"
				>
					{badgeCount > 9 ? "9+" : badgeCount}
				</span>
			)}
		</button>
	);
};
