import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../state/user-context";

type Props = {
  readonly needsAuth?: boolean;
};

function ProtectedRoute({ needsAuth = false }: Props) {
  const { user } = useContext(userContext);
  const url = needsAuth ? "/login" : "/";
  return needsAuth === Boolean(user) ? <Outlet /> : <Navigate to={url} />;
}

export default ProtectedRoute;
