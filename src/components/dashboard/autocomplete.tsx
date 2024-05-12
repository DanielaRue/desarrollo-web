import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  readonly options: string[];
};

function Autocomplete({ options }: Props) {
  return (
    <MuiAutocomplete
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Nombre"
        />
      )}
    />
  );
}

export default Autocomplete;
