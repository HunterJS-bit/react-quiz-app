import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';
import { ReactComponent as Logo } from '../../assets/stop_sign.svg';

const BannerSection = styled.section`
position: relative;
`;



const Banner = ({ title, subtitle }) => {
  return (
    <BannerSection className="page-banner bg-contain bg-bottom d-flex align-items-center">
      <Grid container>
        <Grid item xs={12} md={12}>
          {/* <div class="stop-logo">
            <Logo></Logo>
          </div> */}
          <div className="container">
            <div className="banner-text">
              <span>{title}</span>
              <h2>{subtitle}</h2>
            </div>
          </div>
        </Grid>
      </Grid>
    </BannerSection>
  );
};

export default Banner;
