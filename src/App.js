import React from "react";
import { TextField, Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <form>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Nume"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
