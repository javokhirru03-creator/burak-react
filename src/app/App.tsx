import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
<<<<<<< HEAD
import { Link, Route, Switch } from "react-router-dom";
import { About } from "./screens/About";
import { Users } from "./screens/Users";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

function Home() {
  return <Container>HOME</Container>;
=======
function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction="column">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h4">
            Create React App on TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4} color="success">
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
>>>>>>> d0ef3050003b1c73abb1f7cf099cb85ec9630d7c
}

export default App;
