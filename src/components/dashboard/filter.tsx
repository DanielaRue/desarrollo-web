import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

type Props = {
  readonly categories: Set<string>;
};

function Filter({ categories }: Props) {
  return (
    <Stack direction="row" spacing={2}>
      {[...categories].map((category) => (
        <Chip label={category} />
      ))}
    </Stack>
  );
}

export default Filter;
