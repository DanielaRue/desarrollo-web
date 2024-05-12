import { useContext } from "react";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Formik, Form } from "formik";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "../components/text-field";
import { userContext } from "../state/user-context";

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const initialValues = {
  username: "",
  password: "",
};

function Login() {
  const { setUser } = useContext(userContext);
  const handleSubmit = (values: typeof initialValues) => {
    const { username } = values;
    setUser!({ username, role: "admin" });
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
        }}
      >
        <Box p={3}>
          <Typography variant="h4" component="h1" mb={2} align="center">
            Login
          </Typography>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form noValidate>
              <Stack spacing={2}>
                <TextField
                  name="username"
                  label="Username"
                  placeholder="johndoe"
                  required
                />
                <TextField
                  type="password"
                  name="password"
                  label="Password"
                  required
                />
                <Button
                  fullWidth
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  Login
                </Button>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
