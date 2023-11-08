export interface UserAvatarProps {
	img: string;
	size?: "sm" | "md";
}

export const UserAvatar = ({ img, size = "md" }: UserAvatarProps) => {
	const sizeClasses = {
		sm: "w-8 h-8",
		md: "w-9 h-9",
	};

	return (
		<div className={`rounded-full ${sizeClasses[size]}`}>
			<img
				src={img}
				alt="user Avatar"
				className="block w-full h-full object-cover rounded-full"
			/>
		</div>
	);
};
