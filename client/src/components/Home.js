import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from './common/Hero';
import Container from '@material-ui/core/Container';
import BlogCard from './Blog/BlogCard';
import Box from '@material-ui/core/Box';


const Home = () => {

  return (<div className="main">
      <Hero></Hero>
      <Box p={5}>
        <Container maxWidth="lg">
          <Grid container 
                spacing={5} 
                alignItems="center"
                justify="center">
          {
            [1,2,3].map(e => {
              return <Grid item  key={e} md={3}>
                  <BlogCard></BlogCard>
                </Grid>;
            })
          }
          </Grid>
        </Container>
      </Box>
    </div>);
};

export default Home;
