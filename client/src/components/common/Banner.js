import React from "react";
import Grid from "@material-ui/core/Grid";

const Banner = ({ title, subtitle }) => {
  return (
    <section className="page-banner bg-contain bg-bottom d-flex align-items-center">
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className="container">
            <div className="banner-text">
              <span>{title}</span>
              <h2>{subtitle}</h2>
            </div>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Banner;
