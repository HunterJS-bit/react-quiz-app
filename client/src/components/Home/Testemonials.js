import React from "react";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';
import PersonTestemonial from "./PersonTestemonial";

// icons
import Person1 from "../../assets/Person_1.png";
import Person2 from "../../assets/Person_2.png";
import Person3 from "../../assets/Person_3.png";

const Testemonials = () => {
  return (
    <section id="testimonials-section">
      <Container container={true} fixed={true} maxWidth="lg">
        <div className="jss1216 jss1214 text-left">
          <Typography variant="h3"> Sta kazu o nama</Typography>
          {/* <Typography variant='body1'>Ako želite i Vi ostaviti Vaš komentar ,kontaktirajte nas. Sve pohvale i/ili kritike su
            dobrodošle.</Typography> */}
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

      </Container>
    </section>
  );
};

export default Testemonials;
