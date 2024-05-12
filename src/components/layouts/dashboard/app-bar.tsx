import MuiAppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function AppBar() {
  return (
    <MuiAppBar position="static">
      <ToolBar>
        <Typography variant="h6" component="div">
          INVENTARIO DE DISPOSITIVOS MÉDICOS HOSPITALARIOS
        </Typography>
      </ToolBar>
    </MuiAppBar>
  );
}

export default AppBar;
