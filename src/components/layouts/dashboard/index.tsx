import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import AppBar from "./app-bar";

function DashboardLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
      }}
    >
      <AppBar />

      <Container>
        <Box py={3}>
          <Outlet />
        </Box>
      </Container>
    </Box>
  );
}

export default DashboardLayout;
