import Stack from "@mui/material/Stack";
import Autocomplete from "../components/dashboard/autocomplete";
import Table from "../components/dashboard/table";
import Filter from "../components/dashboard/filter";

const options = [{ name: "Monitor de signos vitales", category: "Monitor SV" },{ name: "Equipo de rayos x portátil", category: "Rayos x" },{ name: "Ventilador mecánico", category: "Ventilador" },{ name: "Máquina de anestesia", category: "Máquina anestesia" },{ name: "Desfibrilador", category: "Desfibrilador" }];

function Dashboard() {
  return (
    <Stack spacing={2}>
      <Autocomplete options={options.map((option) => option.name)} />
      <Filter categories={new Set(options.map((option) => option.category))} />
      <Table options={options} />
    </Stack>
  );
}

export default Dashboard;


