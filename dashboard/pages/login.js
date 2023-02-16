import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import axios from "axios";
import React from "react";

function Login() {
  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");

  const onSubmit = (body) => {
    axios.post(`http://localhost:5000/api/v1/users/login`,{
        ...body
    });
  }
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      height="100vh"
    >
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Stack spacing={2} direction="column">
            <TextField label="Username" id="outlined-size-small" size="small" onChange={(event) => {
            setUsername(event.target.value);
          }}/>
            <TextField
              label="Password"
              id="outlined-size-small"
              size="small"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button variant="contained" onClick={onSubmit.bind(this,{username,password})}>Login</Button>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default Login;
