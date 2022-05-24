import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";

function SuccesFormPage() {
  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2C5E1A",
      }}
    >
      <Box
        sx={{
          marginTop: "5vh",
          marginBottom: "5vh",
          width: "80vw",
          height: "50vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <h4>Formularul a fost completat cu succes!</h4>
      </Box>
    </Container>
  );
}

export default SuccesFormPage;
