import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import ScrollTop from "./ScrollTop";
import Fab from "@material-ui/core/Fab";
import ContactLogo from "../../assets/information.svg";
import Avatar from "@material-ui/core/Avatar";
import Contact from "../common/Contact";
import BottomFooter from "../common/BottomFooter";

const StyledFooter = styled.footer`
    padding:  ${(props) => props.theme.spacing(3, 2)};
    margin-top: auto;
    border-top-width: 1px;
    margin-top: ${(props) => props.theme.spacing(8)},
    padding-top: ${(props) => props.theme.spacing(3)};
    padding-bottom: ${(props) => props.theme.spacing(3)};
    background-color: ${(props) => "#1b277d"}
`;

const ContactButton = styled(Button)`
  background-color: ${(props) => "#1976d2"};
  margin-top: 1em;
  font-weight: 700;
`;

const FormControl = styled(TextField)`
  margin-top: 10px;
`;

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: ["Cool stuff", "Random feature", "Team feature", "Developer stuff", "Another one"],
  },
  {
    title: "Resources",
    description: ["Resource", "Resource name", "Another resource", "Final resource"],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

const Footer = (props) => {
  return (
    <div>
      <Contact></Contact>
      {/* <section className="contact">
        <div className="container">
          <Paper elevation={2} p={3}>
            <form className="contact-form" noValidate autoComplete="off">
              <Avatar alt="Remy Sharp" src={ContactLogo}></Avatar>
              <h1 className="mt-0 font-normal text-44">Imate pitanja ?</h1>
              <h4 className="jss478">
                Divide details about your product or agency work into parts. Write a few lines about
                each one and contact us about any further collaboration. We will responde get back
                to you in a couple of hours.
              </h4>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    required
                    id="firstName"
                    name="firstName"
                    label="Vase Ime"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    required
                    id="lastName"
                    name="lastName"
                    label="Vas Email"
                    fullWidth
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    variant="outlined"
                    label="Vasa poruka"
                    multiline
                    rows={6}
                    rowsMax={10}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <ContactButton variant="contained" color="primary" fullWidth>
                    Posalji
                  </ContactButton>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </div>
      </section> */}
      {/* <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <i className="arrow up"></i>
        </Fab>
      </ScrollTop> */}
      {/* <StyledFooter>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </StyledFooter> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,96L30,101.3C60,107,120,117,180,144C240,171,300,213,360,197.3C420,181,480,107,540,74.7C600,43,660,53,720,96C780,139,840,213,900,213.3C960,213,1020,139,1080,117.3C1140,96,1200,128,1260,133.3C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
      <BottomFooter></BottomFooter>
    </div>
  );
};

export default Footer;
