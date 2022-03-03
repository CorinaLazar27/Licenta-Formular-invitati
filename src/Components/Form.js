import React from "react";
import { TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

function FormPage() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const acquaintance = [
    "Family",
    "High school classmate",
    "General school classmate",
    "College classmate",
    "Work colleague",
    "Friend",
    "Friend with parents",
  ];

  const drinks = [
    "Coca-Cola",
    "Fanta",
    "Natural juice",
    "Sprite",
    "Beer",
    "Wine",
    "Cocktail",
    "Champanie",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{(2, 4)}$",
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField id="outlined-basic" label="Age" variant="outlined" />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={8}>
              <label>How do you know the organizer?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                sx={{ minWidth: "60%", maxWidth: "60%" }}
                renderValue={(selected) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {acquaintance.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={8}>
              <label>What drinks do you want?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                sx={{ minWidth: "60%", maxWidth: "60%" }}
                renderValue={(selected) => (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 0.5,
                    }}
                  >
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {drinks.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br></br>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
}

export default FormPage;
