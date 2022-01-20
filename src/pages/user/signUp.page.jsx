import {Box, TextField, Typography, Button} from "@mui/material";
import styled from "styled-components";

function SignUp() {
    return (
        <Form>
            <Box>
                <Typography component="h1" variant="h5">
                    Sign Up
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
                        Sign Up
                    </Button>
                </Box>
            </Box>
        </Form>
    )
}

export default SignUp;

const Form = styled(Box)`
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  & > div {
    width: 300px;
    padding: 150px;
  }
`