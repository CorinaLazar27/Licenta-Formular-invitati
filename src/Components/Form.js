import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import axios from "axios";

function FormPage() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();

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

  const cookies = [
    "Cupcakes",
    "Cake pops",
    "Macarons",
    "Mini mousse",
    "Profiterol",
    "Raffaelo",
    "Chocolate cakes",
    "Caramel cakes",
    "Vanilla cakes",
    "Fruits cakes",
    "Jellys",
  ];

  const fruits = [
    "Apples",
    "Pears",
    "Nectarines",
    "Mandarins",
    "Limes",
    "Bananas",
    "Mango",
    "Strawberries",
    "Raspberries",
    "Kiwi",
    "Passion fruit",
    "Watermelons",
  ];
  const appetizer = ["Ham", "Salami", "Cheese", "Cottage cheese"];
  const maincourse = [
    "Noodles soup",
    "Sour soup",
    "Potato soup",
    "Meatball soup",
  ];
  const type2 = ["Cabbage", "Grill with mashed potatoes"];
  const music = ["Commercial", "Disco", "Pop", "Rock", "Traditional music"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [organizerOpinion, setOrganizerOpinion] = useState([]);
  const [drinksOpinion, setDrinksOpinion] = useState([]);
  const [cakesOpinion, setCakesOpinion] = useState([]);
  const [fruitsOpinion, setFruitsOpinion] = useState([]);
  const [appetizerOpinion, setAppetizerOpinion] = useState([]);
  const [maincourseOpinion, setMainCourseOpinion] = useState([]);
  const [type2Opinion, setType2Opinion] = useState([]);
  const [musicOpinion, setMusicOpinion] = useState([]);

  const handleChange_organizerOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setOrganizerOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange_drinksOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setDrinksOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange_cakesOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setCakesOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange_fruitsOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setFruitsOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChange_appetizerOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setAppetizerOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange_maincourseOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setMainCourseOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange_type2Opinion = (event) => {
    const {
      target: { value },
    } = event;
    setType2Opinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange_musicOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setMusicOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const ShowValues = () => {
    console.log(email);
    console.log(name);
    console.log(age);
    console.log(location);
    console.log(organizerOpinion);
    console.log(drinksOpinion);
    console.log(cakesOpinion);
    console.log(fruitsOpinion);
    console.log(appetizerOpinion);
    console.log(maincourseOpinion);
    console.log(type2Opinion);
    console.log(musicOpinion);
  };

  function FormOptions() {
    axios({
      method: "POST",
      url: "/postoptionsinvitation",
      data: {
        email: email,
        name: name,
        age: age,
        location: location,
        organizerOpinion: organizerOpinion,
        drinksOpinion: drinksOpinion,
        cakesOpinion: cakesOpinion,
        fruitsOpinion: fruitsOpinion,
        appetizerOpinion: appetizerOpinion,
        maincourseOpinion: maincourseOpinion,
        type2Opinion: type2Opinion,
        musicOpinion: musicOpinion,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  return (
    <div className="App">
      <div className="Background_inv">
        <form>
          <Grid container spacing={2} columns={16}>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
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
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Age"
                variant="outlined"
                onChange={(event) => setAge(event.target.value)}
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                onChange={(event) => setLocation(event.target.value)}
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
                value={organizerOpinion}
                onChange={handleChange_organizerOpinion}
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
                    style={getStyles(name, organizerOpinion, theme)}
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
                value={drinksOpinion}
                onChange={handleChange_drinksOpinion}
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
                {drinks.map((drink) => (
                  <MenuItem
                    key={drink}
                    value={drink}
                    style={getStyles(drink, drinksOpinion, theme)}
                  >
                    {drink}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What cakes do you want in candy bar?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={cakesOpinion}
                onChange={handleChange_cakesOpinion}
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
                {cookies.map((cookie) => (
                  <MenuItem
                    key={cookie}
                    value={cookie}
                    style={getStyles(cookie, cakesOpinion, theme)}
                  >
                    {cookie}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What fruits do you want in fruits bar?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={fruitsOpinion}
                onChange={handleChange_fruitsOpinion}
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
                {fruits.map((fruit) => (
                  <MenuItem
                    key={fruit}
                    value={fruit}
                    style={getStyles(fruit, fruitsOpinion, theme)}
                  >
                    {fruit}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What do you want to eat at appetizer?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={appetizerOpinion}
                onChange={handleChange_appetizerOpinion}
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
                {appetizer.map((app) => (
                  <MenuItem
                    key={app}
                    value={app}
                    style={getStyles(app, appetizerOpinion, theme)}
                  >
                    {app}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What do you want to eat at main course?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={maincourseOpinion}
                onChange={handleChange_maincourseOpinion}
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
                {maincourse.map((mc) => (
                  <MenuItem
                    key={mc}
                    value={mc}
                    style={getStyles(mc, maincourseOpinion, theme)}
                  >
                    {mc}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What do you want to eat at type 2?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={type2Opinion}
                onChange={handleChange_type2Opinion}
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
                {type2.map((t2) => (
                  <MenuItem
                    key={t2}
                    value={t2}
                    style={getStyles(t2, type2Opinion, theme)}
                  >
                    {t2}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={8}>
              <label>What music do you want to hear?</label>
            </Grid>
            <Grid item xs={8}>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={musicOpinion}
                onChange={handleChange_musicOpinion}
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
                {music.map((m) => (
                  <MenuItem
                    key={m}
                    value={m}
                    style={getStyles(m, musicOpinion, theme)}
                  >
                    {m}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br></br>
        </form>
        <input type="submit" onClick={() => FormOptions()}></input>
      </div>
    </div>
  );
}

export default FormPage;
