import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NotFoundImage from '../assets/NotFound.png'

const NotFound = () => {

  return (   <section id="not-found"> 
        <div className="container">
          <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  Ups Nismo mogli da pronadjemo vasu stranicu :/
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={NotFoundImage} />
            </Grid>
          </Grid>
        </div>
</section>)
};

export default NotFound;
