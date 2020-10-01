import React from "react";
import Grid from "@material-ui/core/Grid";

const PersonTestemonial = ({ avatar, personInfo, profesion, comment }) => {
  return (
    <Grid item xs={12} md={4}>
      <div className="MuiGrid-root avatar">
        <img src={avatar} alt="person male thumb" />
      </div>
      <div className="MuiGrid-root tstAuthor">
        <h4>{personInfo}</h4>
        <strong>{profesion}</strong>
      </div>
      <p className="testemon-text">{comment}</p>
    </Grid>
  );
};

export default PersonTestemonial;
