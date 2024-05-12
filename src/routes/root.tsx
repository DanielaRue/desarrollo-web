import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "../components/protected-route";
import DashboardLayout from "../components/layouts/dashboard";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";

const router = createBrowserRouter([
  {
    errorElement: <Navigate to="/" />,
    children: [
      {
        element: <ProtectedRoute needsAuth />,
        children: [
          {
            path: "/",
            element: <DashboardLayout />,
            children: [
              {
                index: true,
                element: <Dashboard />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

export default router;
