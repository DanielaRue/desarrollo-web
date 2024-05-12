import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import router from "./routes/root";
import UserContext from "./state/user-context";

function App() {
  return (
    <>
      <CssBaseline />
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </>
  );
}

export default App;
