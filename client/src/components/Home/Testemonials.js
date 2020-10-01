import React from "react";
import Grid from "@material-ui/core/Grid";
import PersonTestemonial from "./PersonTestemonial";

// icons
import Person1 from "../../assets/Person_1.png";
import Person2 from "../../assets/Person_2.png";
import Person3 from "../../assets/Person_3.png";

const Testemonials = () => {
  return (
    <section id="testimonials-section">
      <div className="container">
        <div className="left mb-16">
          <h1 className="mt-0 font-normal text-44">Sta kazu o nama </h1>
          <p>
            Ako želite i Vi ostaviti Vaš komentar ,kontaktirajte nas. Sve pohvale i/ili kritike su
            dobrodošle.
          </p>
        </div>
        <Grid container spacing={3}>
          <PersonTestemonial
            avatar={Person1}
            personInfo="Mihajlo Radivojevic"
            profesion="Student"
            comment="Želim da se zahvalim cjelom Timu koji su ispunili mom srcu želju ,obavili svoj posao
                kao niko do sada što uspio nije ,niti će."
          />
          <PersonTestemonial
            avatar={Person2}
            personInfo="Jovana Stojiljkovic"
            profesion="Medicinski radnik"
            comment="Veoma pouzdani u radu a naročito bih istakao efikasno poslovanje elektronskim putem
            što je velika ušteda vremena meni kao klijentu."
          />
          <PersonTestemonial
            avatar={Person3}
            personInfo="Srdjan Stojanovic"
            profesion="Gimnazijalac"
            comment="Odlicna podrska, vrlo ljubazni i odlicana usluga."
          />
        </Grid>
      </div>
    </section>
  );
};

export default Testemonials;
