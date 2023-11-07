import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants";

interface AuthGuardProps {
	children: React.ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
	const access_token = localStorage.getItem("access_token");

	if (!access_token) {
		return <Navigate to={ROUTES.HOME} />;
	}

	return children;
};
