import {Box, TextField, Typography, Button} from "@mui/material";
import styled from "styled-components";

function SignIn() {
    return (
        <Form>
            <Box>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained">
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Form>
    )
}

export default SignIn;

const Form = styled(Box)`
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  & > div {
    width: 300px;
    padding: 150px;
  }
`