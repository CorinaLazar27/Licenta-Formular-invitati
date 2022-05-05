import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { Form, Formik } from "formik";
import { Grid, Container, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FormikTextField } from "./FormikComponents/FormikTextField";
import { FormikSelectSimple } from "./FormikComponents/FormikSelectSimple";
import { FormikRatingField } from "./FormikComponents/FormikRating";
import { FormikDatePicker } from "./FormikComponents/FormikDatePicker";
import { LoadingButton, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
function FormPage() {
  const history = useHistory();

  const eventsSelectItems = ["Nunta", "Botez", "Aniversare"];

  const [openError, setOpenError] = useState(false);

  const [openSucces, setOpenSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
    setOpenSucces(false);
  };

  function AperitiveRating(values) {
    setLoading(true);
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
        Type1Rating(values);

        console.log(res);
        console.log("aperitive");
      })
      .catch((error) => {
        if (error.response) {
          setOpenError(true);
          setLoading(false);
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
        Type2Rating(values);
        const res = response.data;
        console.log(res);
        console.log("felul1");
      })
      .catch((error) => {
        if (error.response) {
          setOpenError(true);
          setLoading(false);
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

        MusicRating(values);
        console.log(res);
        console.log("felul 2");
      })
      .catch((error) => {
        if (error.response) {
          setOpenError(true);
          setLoading(false);
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
        // setOpenSucces(true);
        history.push("/succes");
        console.log("muzica");
      })
      .catch((error) => {
        setOpenError(true);
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })
      .finally(() => setLoading(false));
  }

  const ValidationsForm = Yup.object().shape({
    event: Yup.string().required("Trebuie aleasă o opțiune!"),
    emailOrganizer: Yup.string()
      .required("Introdu email-ul organizatorului!")
      .email("Introdu un email valid!"),
    email: Yup.string()
      .required("Introdu email-ul tău!")
      .email("Introdu un email valid!"),
    name: Yup.string().required("Introdu numele!"),
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "purple",
      }}
    >
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          Eroare la trimiterea chestionarului!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSucces}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success">
          Chestionar completat cu succes!
        </Alert>
      </Snackbar>
      <Box
        sx={{
          marginTop: "5vh",
          marginBottom: "5vh",
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <Formik
          initialValues={{
            event: "",
            date: new Date(),
            emailOrganizer: "",
            email: "",
            name: "",
            age: "",
            location: "",

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
          validationSchema={ValidationsForm}
          onSubmit={(values) => {
            values.date = values.date.toLocaleDateString();

            AperitiveRating(values);
          }}
        >
          <Form>
            <Grid
              container
              columnSpacing={2}
              rowSpacing={3}
              padding={4}
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
              {/* <Grid item xs={12}>
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
              </Grid> */}

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <Grid
                    container
                    columnSpacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1vh",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "2vh",
                      }}
                    >
                      <label>
                        Cât de mult îți dorești următoarele tipuri de aperitive?
                      </label>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Aperitiv traditional</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivTraditionalRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Aperitiv vegetarian</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivVegetarianRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Aperitiv cu fructe de mare</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="aperitivFructeDeMareRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <Grid
                    container
                    columnSpacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1vh",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "2vh",
                      }}
                    >
                      <label>
                        Cât de mult îți dorești următoarele preparate la felul
                        1?
                      </label>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Supa taietei</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="supaTaieteiRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Ciorba acra</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaAcraRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Ciorba cartofi</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaCartofiRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Ciorba perisoare</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="ciorbaPerisoareRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <Grid
                    container
                    columnSpacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1vh",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "2vh",
                      }}
                    >
                      <label>
                        Cât de mult îți dorești următoarele preparate la felul
                        2?
                      </label>
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Sarmale</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="sarmaleRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Carne de pui</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carnePuiRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Carne de porc</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carnePorcRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Carne de vita</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="carneVitaRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box
                  sx={{
                    border: "1px solid",
                    borderRadius: 4,
                    borderColor: "gray",
                  }}
                >
                  <Grid
                    container
                    columnSpacing={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1vh",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "2vh",
                      }}
                    >
                      <label>
                        Cât de mult îți dorești să asculți următoarele tipuri de
                        muzică?
                      </label>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Comercială</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaComercialaRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Disco</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaDiscoRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Pop</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaPopRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Rock</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaRockRating" />
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "right",
                      }}
                    >
                      <label>Muzică petrecere</label>
                    </Grid>

                    <Grid item xs={6}>
                      <FormikRatingField name="muzicaDePetrecereRating" />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <LoadingButton
                  loading={loading}
                  variant="contained"
                  endIcon={<SendIcon />}
                  id="fillpdfbutton"
                  type="submit"
                  sx={{
                    backgroundColor: "purple",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "purple",
                      color: "white",
                    },
                    float: "right",
                  }}
                >
                  Trimite
                </LoadingButton>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
}

export default FormPage;
