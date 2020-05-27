import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const Hero = () => {

    return (<div className="hero">
        <Container maxWidth="lg" >
          <img src="https://projektmarc.ch/codepen/1/earth2.jpg" />
          <Box>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" className="actionCall">
                    Main call to action
                  </Button>
                </Grid>
              </Grid>
          </div>
          </Box>
        </Container>
      </div>)
};

export default Hero;