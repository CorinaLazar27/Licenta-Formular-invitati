import React, { useState, useEffect } from "react";

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
import { useLocation } from "react-router-dom";

function FormPage() {
  const history = useHistory();

  function getURL() {
    const urlString = window.location.search;
    let urlParams = new URLSearchParams(urlString);

    window.localStorage.setItem("emailURL", urlParams.get("email"));
    window.localStorage.setItem("eventURL", urlParams.get("event"));
    window.localStorage.setItem("dateURL", urlParams.get("date"));
  }

  useEffect(() => {
    getURL();
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  }, []);

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
  function ratingChestionar(values) {
    setLoading(true);
    console.log("Rating Chestionar");
    axios({
      method: "POST",
      url: "http://localhost:5000/ratingChestionar",
      data: {
        event: values.event,
        date: values.date,
        emailOrganizer: values.emailOrganizer,
        email: values.email,
        aperitivTraditionalRating: values.aperitivTraditionalRating,
        aperitivVegetarianRating: values.aperitivVegetarianRating,
        aperitivFructeDeMareRating: values.aperitivFructeDeMareRating,

        supaTaieteiRating: values.supaTaieteiRating,
        ciorbaAcraRating: values.ciorbaAcraRating,
        ciorbaCartofiRating: values.ciorbaCartofiRating,
        ciorbaPerisoareRating: values.ciorbaPerisoareRating,

        sarmaleRating: values.sarmaleRating,
        carnePuiRating: values.carnePuiRating,
        carnePorcRating: values.carnePorcRating,
        carneVitaRating: values.carneVitaRating,

        muzicaComercialaRating: values.muzicaComercialaRating,
        muzicaDiscoRating: values.muzicaDiscoRating,
        muzicaPopRating: values.muzicaPopRating,
        muzicaRockRating: values.muzicaRockRating,
        muzicaDePetrecereRating: values.muzicaDePetrecereRating,
      },
    })
      .then((response) => {
        const res = response.data;
        setLoading(false);
        // setOpenSucces(true);
        history.push("/succes");
        console.log(res);
        // console.log("aperitive");
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

  const ValidationsForm = Yup.object().shape({
    event: Yup.string().required("Trebuie aleasă o opțiune!"),
    date: Yup.string()
      .required("Introdu data evenimentului")
      .matches(
        "^[0-9]{2}.[0-9]{2}.[0-9]{4}$",
        "Data trebuie să fie de forma zz.ll.aaaa"
      ),
    emailOrganizer: Yup.string()
      .required("Introdu email-ul organizatorului!")
      .email("Introdu un email valid!"),
    email: Yup.string()
      .required("Introdu email-ul tău!")
      .email("Introdu un email valid!"),
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#9575cd",
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
          width: "85vw",
          backgroundColor: "white",
        }}
      >
        <Formik
          initialValues={{
            event: window.localStorage.getItem("eventURL"),
            date: window.localStorage.getItem("dateURL"),
            emailOrganizer: window.localStorage.getItem("emailURL"),
            email: "",

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
            if (values.aperitivTraditionalRating === 0)
              values.aperitivTraditionalRating = "0";

            if (values.aperitivVegetarianRating === 0)
              values.aperitivVegetarianRating = "0";
            if (values.aperitivFructeDeMareRating === 0)
              values.aperitivFructeDeMareRating = "0";

            if (values.supaTaieteiRating === 0) values.supaTaieteiRating = "0";
            if (values.ciorbaAcraRating === 0) values.ciorbaAcraRating = "0";
            if (values.ciorbaCartofiRating === 0)
              values.ciorbaCartofiRating = "0";
            if (values.ciorbaPerisoareRating === 0)
              values.ciorbaPerisoareRating = "0";

            if (values.sarmaleRating === 0) values.sarmaleRating = "0";
            if (values.carnePuiRating === 0) values.carnePuiRating = "0";
            if (values.carnePorcRating === 0) values.carnePorcRating = "0";
            if (values.carneVitaRating === 0) values.carneVitaRating = "0";

            if (values.muzicaComercialaRating === 0)
              values.muzicaComercialaRating = "0";
            if (values.muzicaDiscoRating === 0) values.muzicaDiscoRating = "0";
            if (values.muzicaPopRating === 0) values.muzicaPopRating = "0";
            if (values.muzicaRockRating === 0) values.muzicaRockRating = "0";
            if (values.muzicaDePetrecereRating === 0)
              values.muzicaDePetrecereRating = "0";
            // if (
            //   typeof values.date === "object" &&
            //   values.date !== null &&
            //   "toLocaleDateString" in values.date
            // ) {
            //   values.date = values.date.toLocaleDateString();
            // }
            // values.date = values.date.toLocaleDateString();
            console.log("completat", values.aperitivTraditionalRating);
            console.log("necompletat", values.aperitivVegetarianRating);
            console.log(
              "tip completat",
              typeof values.aperitivTraditionalRating
            );
            console.log(
              "tip necompletat",
              typeof values.aperitivVegetarianRating
            );
            console.log("SUBMIT");
            ratingChestionar(values);
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
                <FormikTextField
                  id="event"
                  name="event"
                  label="Tip eveniment"
                ></FormikTextField>
                {/* <FormikSelectSimple
                  id="event"
                  name="event"
                  label="Tip eveniment"
                  items={eventsSelectItems}
                /> */}
              </Grid>
              <Grid item xs={12}>
                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <FormikDatePicker name="date" label="Data evenimentului" />
                </LocalizationProvider> */}
                <FormikTextField
                  id="date"
                  name="date"
                  label="Data evenimentului"
                ></FormikTextField>
              </Grid>

              <Grid item xs={12}>
                <FormikTextField
                  name="email"
                  id="email"
                  label="Email personal"
                />
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
                  //  variant="contained"
                  endIcon={<SendIcon />}
                  id="fillpdfbutton"
                  type="submit"
                  sx={{
                    backgroundColor: "#9575cd",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#9575cd",
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
