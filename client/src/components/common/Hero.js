import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeroImage from '../../assets/hero_image.svg';
import styled from 'styled-components';


const HeroTitle = styled(Typography)`
display: inline-block;
font-weight: 900;
font-size: 48px;
line-height: 72px;
color: #fff;
`;

const HeroSubTitle = styled(Typography)`
font-size: 19px;
font-weight: 300;
line-height: 37px;
color: #d2d2d2;
margin: 32px 0px;
`;

const ActionButton = styled(Button)`
color: #fff;
    height: 53px;
    border-radius: 4px;
    display: inline-block;
    border: 1px solid #0dc181;
    padding: 0 38px;
    line-height: 51px;
    text-transform: capitalize;
    letter-spacing: 0;
    background: -webkit-linear-gradient(45deg,#0dc181,#1bdcae);
    background: linear-gradient(45deg,#0dc181,#1bdcae);

`;

const Hero = () => {

  return (<section id="hero" className="hero">
    <Container container fixed={true} maxWidth="lg">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div className="hero-content">
            <HeroTitle variant="h3"> Online testovi za Auto škole </HeroTitle>
            <HeroSubTitle variant="h5">Direktno na sajtu vežbaajte i koristite zvanične testove za polaganje teorijskog dela vozačkog ispita za polaganje svih kategorija u cilju bržeg savladavanja saobraćajnih pravila i propisa.
            </HeroSubTitle>
            <ActionButton variant="contained" size='large' disableElevation> Get Started</ActionButton>
          </div>
        </Grid>
        <Grid item md={6}>
          <img className="hero-img" src={HeroImage} alt="illustration" />
        </Grid>
      </Grid>
    </Container >
  </section >)
};

export default Hero;