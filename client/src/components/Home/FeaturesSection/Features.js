import React from "react";
import Grid from "@material-ui/core/Grid";
import DrivingLicence from "../../../assets/driving-card.svg";

import Feature from "./Feature";

/** icons */

import Wifi from "../../../assets/wifi.png";
import Calendar from "../../../assets/calendar.svg";
import List from "../../../assets/list.svg";
import Like from "../../../assets/like.svg";
import Register from "../../../assets/register.svg";

const Features = () => {
  return (
    <section id="features-section">
      <div className="container">
        <Grid container spacing={10} alignItems="center">
          <Grid container item xs={12} spacing={3} sm={6} md={6} lg={8}>
            <Feature
              icon={Wifi}
              info="Mogućnosti"
              additInfo="Budućim kandidatima nudimo mogućnost izbora automobila, instruktura, kao i termina obuke."
            ></Feature>
            <Feature
              icon={Like}
              info="Brzo i Lako"
              additInfo="Nije potrebna instalacija samo internet"
            ></Feature>
            <Feature
              icon={Register}
              info="Na jednom mestu"
              additInfo="
              Sve na jednom mestu, sa nama ne gubite vreme!"
            ></Feature>
            <Feature
              icon={List}
              info="Teorijska obuka"
              additInfo="Polaznici se uče pravilima na putevima i zakonima u saobraćaju"
            ></Feature>
            <Feature
              icon={Calendar}
              info="Besplatno"
              additInfo="Svi testovi i sva pitanja polaganja sve je besplatno i uvek ce biti"
            ></Feature>
            <Feature
              icon={Wifi}
              info="Raznovrsnost"
              additInfo="Posedujemo preko 254 testova grupisanih u razlicitim kategorijama"
            ></Feature>
          </Grid>
          <Grid container item spacing={3} xs={12} sm={6} md={6} lg={4}>
            <div className="jss168">
              <img className="jss167" src={DrivingLicence} alt="mobile-1" />
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Features;
