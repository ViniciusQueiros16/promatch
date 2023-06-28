import React from "react";
import { Grid, Container } from "@mui/material";
import FormsControlsInputGroups from "./form.js";
import Image from "next/image";
import logo from "/public/images/promatch-logo.png";
import backgroundImage from "/public/images/propostacomercial.png";

const Login = () => {
  return (
    <section
      className="section lg:mt-16"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item lg={10} className="d-flex align-items-center mx-auto px-0">
            <div className="text-center">
              <FormsControlsInputGroups />

              <div className="px-sm-0 mt-4 px-4 text-white">
                <div className="divider opacity-2 rounded-circle w-50 mx-auto my-5 border-2 border-light border-light" />
              </div>
            </div>
            <div className="ml-auto">
              <Image src={logo} alt="Logo proposta" width={120} height={40} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Login;
