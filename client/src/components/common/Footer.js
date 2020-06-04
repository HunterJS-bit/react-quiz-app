import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ScrollTop from './ScrollTop';
import Fab from '@material-ui/core/Fab';

const StyledFooter = styled.footer`
    padding:  ${props => props.theme.spacing(3, 2)};
    margin-top: auto;
    border-top-width: 1px;
    margin-top: ${props => props.theme.spacing(8)},
    padding-top: ${props => props.theme.spacing(3)};
    padding-bottom: ${props => props.theme.spacing(3)};
    background-color: ${props => '#1b277d' }
`;

const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

const Footer = (props) => {

    return (
    <div>
      <section>
        <div className="container">
        <Paper elevation={2} p={3}>
          <Box p={5}>
            <h1 className="mt-0 font-normal text-44">Imate pitanja ?</h1>
            <h4 className="jss478">Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.</h4>
            <form  noValidate autoComplete="off">
              <Grid container>
                  <Grid item  xs={12} sm={12} md={6} >            
                    <FormControl fullWidth p={3}>
                      <InputLabel htmlFor="my-input">Your Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text">Please enter your name.</FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item  xs={12} sm={12} md={6} p={4} >            
                    <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Your Email</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                      </FormControl>
                  </Grid>
                  <FormControl fullWidth>
                        <InputLabel htmlFor="my-input">Your Message</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" multiline
                            rows={4}
                            rowsMax={6}/>
                        <FormHelperText id="my-helper-text">We can wait to hear from you.</FormHelperText>
                  </FormControl>
                  <Grid item  xs={12} sm={12} md={4} >
                      <Button variant="contained" color="secondary">
                        Secondary
                      </Button>
                  </Grid> 
              </Grid>
            </form>
          </Box>
          </Paper>
        </div>
      </section>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <i class="arrow up"></i>
        </Fab>
    </ScrollTop>
    <StyledFooter>
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
        </StyledFooter>
        </div>)
};

export default Footer;
