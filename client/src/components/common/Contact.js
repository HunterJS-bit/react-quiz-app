import React, { useState } from "react";
import styled from 'styled-components';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const ContactTextField = styled(TextField)`
margin-top: 15px;
`;

const ContactButton = styled(Button)`
    box-shadow: 0 14px 26px rgba(0,0,0,.16);
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    height: 53px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid #0dc181;
    padding: 0 38px;
    line-height: 51px;
    letter-spacing: 0;
    background: -webkit-linear-gradient(45deg,#0dc181,#1bdcae);
    background: linear-gradient(45deg,#0dc181,#1bdcae);
    font-family: Rubik,sans-serif;
    outline: none;
    box-shadow: none;
    text-transform: uppercase;
`;

const Contact = () => {

  const [contactField, setContactFields] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })


  const handleChange = name => event => {
    console.log('evo ga change ', name, event);
  };


  const sendEmail = (e) => {
    e.preventDefault();
    console.log('submit form');
  };


  return (
    <section id="contact-section" className="contact">
      <Container container={true} fixed={true} maxWidth="lg">
        <div class="jss1216 jss1214">
          <Typography variant="h3">
            Contact Us
          </Typography>
        </div>
        <Grid container={true} spacing={6}>
          <Grid item xs={2} md={2}></Grid>
          <Grid item xs={12} sm={12} md={7}>
            <div className="main-contact-form">
              <form onSubmit={sendEmail} noValidate autoComplete="off">
                <Grid container={true} spacing={2}>
                  <Grid item xs={12} md={6}>
                    <ContactTextField label="Your Name"
                      value={contactField.name}
                      size="md"
                      fullWidth="true"
                      variant="outlined"
                    ></ContactTextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ContactTextField label="E-mail address"
                      value={contactField.email}
                      fullWidth="true"
                      size="md"
                      variant="outlined"
                    ></ContactTextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ContactTextField label="Phone Number"
                      fullWidth="true"
                      size="md"
                      variant="outlined"
                    ></ContactTextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ContactTextField label="Company Name"
                      fullWidth="true"
                      size="md"
                      variant="outlined"
                    ></ContactTextField>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <ContactTextField
                      fullWidth="true"
                      placeholder="Message *"
                      variant="outlined"
                      multiline
                      rows={6}
                      rowsMax={6}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <ContactButton type="submit"> Submit now</ContactButton>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Grid>
          <Grid item xs={2} md={2}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
