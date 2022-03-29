import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Chip from "@mui/material/Chip";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";
import { Button, Grid, Rating } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormikTextField } from "./FormikComponents/FormikTextField";
import { FormikSelectSimple } from "./FormikComponents/FormikSelectSimple";
import { FormikRatingField } from "./FormikComponents/FormikRating";
import { FormikDatePicker } from "./FormikComponents/FormikDatePicker";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

function FormPage() {
  const history = useHistory();

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
    "Familie",
    "Coleg din liceu",
    "Coleg din generala",
    "Coleg din facultate",
    "Coleg de lucru",
    "Prieten",
    "Prieten cu parintii",
  ];

  const eventsSelectItems = ["Nunta", "Botez", "Aniversare"];

  // const drinks = [
  //   "Coca-Cola",
  //   "Fanta",
  //   "Suc natural",
  //   "Sprite",
  //   "Bere",
  //   "Vin",
  //   "Cocktail",
  //   "Sampanie",
  // ];

  // const cookies = [
  //   "Briose",
  //   "Cake pops",
  //   "Macarons",
  //   "Mini mousse",
  //   "Profiterol",
  //   "Raffaelo",
  //   "Prajituri cu ciocolata",
  //   "Prajituri cu caramel",
  //   "Prajituri cu vanilie",
  //   "Prajituri cu fructe",
  //   "Jeleuri",
  // ];

  // const fruits = [
  //   "Mere",
  //   "Pere",
  //   "Nectarine",
  //   "Mandarine",
  //   "Lamai",
  //   "Banane",
  //   "Mango",
  //   "Capsuni",
  //   "Zmeura",
  //   "Kiwi",
  //   "Fructul pasiunii",
  //   "Pepene",
  // ];
  // const appetizer = ["Sunca", "Salam", "Branza de oaie", "Branza de vaca"];
  // const maincourse = [
  //   "Supa de taietei",
  //   "Ciorba acra",
  //   "Ciorba de cartofi",
  //   "Ciorba de perisoare",
  // ];
  // const type2 = [
  //   "Sarmale",
  //   "Aripioare",
  //   "Gratar de porc",
  //   "Gratar de vita",
  //   "Piure",
  // ];
  // const music = [
  //   "Comerciala",
  //   "Disco",
  //   "Pop",
  //   "Rock",
  //   "Muzica populara",
  //   "Muzica de petrecere",
  // ];

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
  // const [drinksOpinion, setDrinksOpinion] = useState([]);
  // const [cakesOpinion, setCakesOpinion] = useState([]);
  // const [fruitsOpinion, setFruitsOpinion] = useState([]);
  // const [appetizerOpinion, setAppetizerOpinion] = useState([]);
  // const [maincourseOpinion, setMainCourseOpinion] = useState([]);
  // const [type2Opinion, setType2Opinion] = useState([]);
  // const [musicOpinion, setMusicOpinion] = useState([]);

  const handleChange_organizerOpinion = (event) => {
    const {
      target: { value },
    } = event;
    setOrganizerOpinion(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  // const handleChange_drinksOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setDrinksOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange_cakesOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setCakesOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange_fruitsOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setFruitsOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  // const handleChange_appetizerOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setAppetizerOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange_maincourseOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setMainCourseOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange_type2Opinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setType2Opinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  // const handleChange_musicOpinion = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setMusicOpinion(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  function AperitiveRating(values) {
    console.log("AperitiveRating");
    axios({
      method: "POST",
      url: "/aperitiveRating",
      data: {
        event: values.event,
        date: values.date,
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        aperitivTraditionalRating: values.aperitivTraditionalRating,
        aperitivVegetarianRating: values.aperitivVegetarianRating,
        aperitivFructeDeMareRating: values.aperitivFructeDeMareRating,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        console.log("aperitive");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function Type1Rating(values) {
    console.log("Type1Rating");
    axios({
      method: "POST",
      url: "/type1Rating",
      data: {
        event: values.event,
        date: values.date,
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        supaTaieteiRating: values.supaTaieteiRating,
        ciorbaAcraRating: values.ciorbaAcraRating,
        ciorbaCartofiRating: values.ciorbaCartofiRating,
        ciorbaPerisoareRating: values.ciorbaPerisoareRating,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        console.log("felul1");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function Type2Rating(values) {
    console.log("Type2Rating");
    axios({
      method: "POST",
      url: "/type2Rating",
      data: {
        event: values.event,
        date: values.date,
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        sarmaleRating: values.sarmaleRating,
        carnePuiRating: values.carnePuiRating,
        carnePorcRating: values.carnePorcRating,
        carneVitaRating: values.carneVitaRating,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        console.log("felul 2");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function MusicRating(values) {
    console.log("MusicRating");
    axios({
      method: "POST",
      url: "/musicRating",
      data: {
        event: values.event,
        date: values.date,
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        muzicaComercialaRating: values.muzicaComercialaRating,
        muzicaDiscoRating: values.muzicaDiscoRating,
        muzicaPopRating: values.muzicaPopRating,
        muzicaRockRating: values.muzicaRockRating,
        muzicaDePetrecereRating: values.muzicaDePetrecereRating,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        console.log("muzica");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  function FormOptions(values) {
    axios({
      method: "POST",
      url: "/postoptionsinvitation",
      data: {
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        name: values.name,
        age: values.age,
        location: values.location,
        organizerOpinion: values.organizerOpinion,
        drinksOpinion: values.drinksOpinion,
        cakesOpinion: values.cakesOpinion,
        fruitsOpinion: values.fruitsOpinion,
        appetizerOpinion: values.appetizerOpinion,
        maincourseOpinion: values.maincourseOpinion,
        type2Opinion: values.type2Opinion,
        musicOpinion: values.musicOpinion,
      },
    })
      .then((response) => {
        const res = response.data;
        console.log(res);
        if (res == "Done") history.push("/succes");
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
        <Formik
          initialValues={{
            event: "",
            date: new Date(),
            emailOrganizer: "",
            email: "",
            name: "",
            age: "",
            location: "",
            organizerOpinion: [],
            drinksOpinion: [],
            cakesOpinion: [],
            fruitsOpinion: [],
            appetizerOpinion: [],
            maincourseOpinion: [],
            type2Opinion: [],
            musicOpinion: [],

            aperitivTraditionalRating: 0,
            aperitivVegetarianRating: 0,
            aperitivFructeDeMareRating: 0,

            supaTaieteiRating: 0,
            ciorbaAcraRating: 0,
            ciorbaCartofiRating: 0,
            ciorbaPerisoareRating: 0,

            sarmaleRating: 0,
            carnePuiRating: 0,
            carnePorcRating: 0,
            carneVitaRating: 0,

            muzicaComercialaRating: 0,
            muzicaDiscoRating: 0,
            muzicaPopRating: 0,
            muzicaRockRating: 0,
            muzicaDePetrecereRating: 0,
          }}
          onSubmit={(values) => {
            //FormOptions(values);
            values.date = values.date.toLocaleDateString();
            Type1Rating(values);
            Type2Rating(values);
            AperitiveRating(values);
            MusicRating(values);
            console.log(values);
          }}
        >
          <Form>
            <Grid
              container
              columnSpacing={2}
              rowSpacing={3}
              padding={3}
              display="flex"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Grid item xs={12}>
                <FormikTextField
                  name="emailOrganizer"
                  id="outlined-basic"
                  label="Email organizator"
                />
              </Grid>

              <Grid item xs={12}>
                {" "}
                <FormikSelectSimple
                  id="event"
                  name="event"
                  label="Tip eveniment"
                  items={eventsSelectItems}
                />
              </Grid>
              <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormikDatePicker name="date" label="Data evenimentului" />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={12}>
                <FormikTextField
                  name="email"
                  id="email"
                  label="Email personal"
                />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField id="outlined-basic" label="Nume" name="name" />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField id="age" label="Ani" name="age" />
              </Grid>
              <Grid item xs={12}>
                <FormikTextField
                  id="outlined-basic"
                  label="Localitate domiciliu"
                  name="location"
                />
              </Grid>

              <Grid item xs={12}>
                <label>De unde cunosti organizatorul?</label>
                <FormikSelectSimple
                  id="organizerOpinion"
                  name="organizerOpinion"
                  onChange={handleChange_organizerOpinion}
                  multiple
                  items={acquaintance}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid>

              {/* <Grid item xs={12}>
                <label>Ce bauturi ai dori sa bei?</label>
                <FormikSelectSimple
                  id="drinksOpinion"
                  name="drinksOpinion"
                  multiple
                  items={drinks}
                  onChange={handleChange_drinksOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              {/* <Grid item xs={12}>
                <label>
                  Ce prajituri ti-ar placea sa mananci din candy bar?
                </label>
                <FormikSelectSimple
                  id="cakesOpinion"
                  name="cakesOpinion"
                  multiple
                  items={cookies}
                  onChange={handleChange_cakesOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              {/* <Grid item xs={12}>
                <label>Ce fructe ai dori sa mananci?</label>
                <FormikSelectSimple
                  id="fruitsOpinion"
                  name="fruitsOpinion"
                  multiple
                  items={fruits}
                  onChange={handleChange_fruitsOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              {/* <Grid item xs={12}>
                <label>Ce gustari doresti sa mananci?</label>
                <FormikSelectSimple
                  id="appetizerOpinion"
                  name="appetizerOpinion"
                  multiple
                  items={appetizer}
                  onChange={handleChange_appetizerOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <label>
                    Cat de mult iti doresti urmatoarele tipuri de aperitive?
                  </label>

                  <Grid container sx={{ marginTop: 2 }}>
                    <Grid item xs={6}>
                      <label>Aperitiv traditional</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivTraditionalRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Aperitiv vegetarian</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivVegetarianRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Aperitiv cu fructe de mare</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivFructeDeMareRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* <Grid item xs={12}>
                <label>Ce doresti sa mananci la felul 1?</label>
                <FormikSelectSimple
                  id="maincourseOpinion"
                  name="maincourseOpinion"
                  multiple
                  items={maincourse}
                  onChange={handleChange_maincourseOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <label>
                    Cat de mult iti doresti urmatoarele preparate la felul 1?
                  </label>

                  <Grid container sx={{ marginTop: 2 }}>
                    <Grid item xs={6}>
                      <label>Supa taietei</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="supaTaieteiRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Ciorba acra</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaAcraRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Ciorba cartofi</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaCartofiRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Ciorba perisoare</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaPerisoareRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* <Grid item xs={12}>
                <label>Ce doresti sa mananci la felul 2?</label>
                <FormikSelectSimple
                  id="type2Opinion"
                  name="type2Opinion"
                  multiple
                  items={type2}
                  onChange={handleChange_type2Opinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid> */}

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <label>
                    Cat de mult iti doresti urmatoarele preparate la felul 2?
                  </label>

                  <Grid container sx={{ marginTop: 2 }}>
                    <Grid item xs={6}>
                      <label>Sarmale</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="sarmaleRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Carne de pui</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carnePuiRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Carne de porc</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carnePorcRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Carne de vita</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carneVitaRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              {/* <Grid item xs={12}>
                <label>Ce muzica ti-ai dori sa asculti?</label>
                <FormikSelectSimple
                  id="musicOpinion"
                  name="musicOpinion"
                  multiple
                  items={music}
                  onChange={handleChange_musicOpinion}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
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
                </FormikSelectSimple>
              </Grid>
            */}

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <label>
                    Cat de mult iti doresti sa asculti urmatoarele tipuri de
                    muzica?
                  </label>

                  <Grid container sx={{ marginTop: 2 }}>
                    <Grid item xs={6}>
                      <label>Comerciala</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaComercialaRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Disco</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaDiscoRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Pop</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaPopRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Rock</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaRockRating" />
                    </Grid>

                    <Grid item xs={6}>
                      <label>Muzica de petrecere</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaDePetrecereRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              id="fillpdfbutton"
              type="submit"
              sx={{
                backgroundColor: "pink",
                color: "black",
                "&:hover": {
                  backgroundColor: "pink",
                  color: "black",
                },
                marginLeft: "70%",
              }}
            >
              Trimite
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default FormPage;
