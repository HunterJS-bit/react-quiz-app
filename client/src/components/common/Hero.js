import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import logo from '../../assets/car_main.svg';



const Hero = () => {

    return (<div className="hero">
          <div className="container">
          <Grid container spacing={3}>
              <Grid item xs={12} md={7} lg={8}>
                <div class="hero-image">
                   <img src={logo} />
                </div>
              </Grid>
              <Grid item xs={12}  md={5} lg={4}>
                <Box display="flex" flexDirection="column" justifyContent="center">
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Auto testovi 
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
                            Probajte Test
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                </Box>
              </Grid>
        </Grid>
          </div>
      </div>)
};

export default Hero;