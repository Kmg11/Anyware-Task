import userImage from "../../../../assets/images/user-image.avif";

export const UserImage = () => {
	return (
		<div className="w-9 h-9 rounded-full">
			<img
				src={userImage}
				alt="user image"
				className="block w-full h-full object-cover rounded-full"
			/>
		</div>
	);
};
