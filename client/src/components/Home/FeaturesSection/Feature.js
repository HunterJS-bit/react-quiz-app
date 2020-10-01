import React from "react";
import Grid from "@material-ui/core/Grid";

const Feature = ({ icon, info, additInfo }) => {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <div className="relative mx-4">
        <div className="jss169">
          <img src={icon} />
        </div>
      </div>
      <div>
        <h4 className="mt-6 font-normal mb-0">{info}</h4>
        <p>{additInfo}</p>
      </div>
    </Grid>
  );
};

export default Feature;
