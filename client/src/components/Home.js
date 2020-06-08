import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from './common/Hero';
import BlogCard from './Blog/BlogCard';
import Person1 from '../assets/Person_1.png';
import Person2 from '../assets/Person_2.png';
import Person3 from '../assets/Person_3.png';

const Home = (props) => {

  return (<div className="main">
    <Hero></Hero>
    <section id="features">
      <div className="container">
        <Grid container spacing={10} alignItems="center">
          <Grid container item xs={12} spacing={3} sm={6} md={6} lg={8}>
            <div className="max-w-400 mb-16">
              <h1 className="mt-0 font-normal text-44">App Features</h1>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
            </div>
            <Grid container spacing={5}>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">Use on Any Device</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">Material Design Icon</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">New & enhanced tests</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">Use on Any Device</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">Use on Any Device</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
              <Grid item  xs={12} sm={6} md={6} lg={4}>
                <div className="relative mx-4"><div className="jss169"><svg className="MuiSvgIcon-root text-54 MuiSvgIcon-colorPrimary" focusable="false" viewBox="0 0 68.92 49.54" aria-hidden="true"><rect id="Rectangle_848" data-name="Rectangle 848" width="66" height="42" rx="3" transform="translate(1.291 2)"></rect><path id="Path_2426" data-name="Path 2426" d="M64.617,17H4.308A4.313,4.313,0,0,0,0,21.308V57.924a4.313,4.313,0,0,0,4.308,4.308H26.385v2.154H21a1.077,1.077,0,0,0,0,2.154H47.924a1.077,1.077,0,0,0,0-2.154H42.539V62.232H64.617a4.313,4.313,0,0,0,4.308-4.308V21.308A4.313,4.313,0,0,0,64.617,17ZM40.385,64.386H28.539V62.232H40.385Zm24.231-4.308H4.308a2.154,2.154,0,0,1-2.154-2.154H66.771A2.154,2.154,0,0,1,64.617,60.078Zm2.154-4.308H2.154V21.308a2.154,2.154,0,0,1,2.154-2.154H64.617a2.154,2.154,0,0,1,2.154,2.154Z" transform="translate(0 -17)"></path></svg></div></div>
                <div><h4 className="mt-6 font-normal mb-0">Use on Any Device</h4><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p></div>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item spacing={3}  xs={12} sm={6} md={6} lg={4}>
              <div className="jss168">
                <img className="jss167" src="http://react-landing.angulardashboard.com/assets/images/mobile-2.svg" alt="mobile-1" />
              </div>
          </Grid>
        </Grid>

      </div>
    </section>
    <section id="blog">
      <div className="container">
          <div className="mb-16">
            <h1 className="mt-0 font-normal text-44">Blog</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.</p>
          </div>
          <Grid container
              spacing={5}
              alignItems="center"
              justify="center">
              {
                [1, 2, 3, 4].map(e => {
                  return <Grid item key={e} md={3}>
                    <BlogCard></BlogCard>
                  </Grid>;
                })
              }
          </Grid>
       </div>
    </section>
    <section id="testemonials">
      <div className="container">
        <div className="left mb-16">
            <h1 className="mt-0 font-normal text-44">Sta kazu o nama </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <Grid container spacing={3}>
          <Grid item  xs={12} md={4}>
            <div class="MuiGrid-root avatar"><img src={Person1} alt="person male thumb" /></div>
            <div class="MuiGrid-root tstAuthor"><h4>Mihajlo Radivojevic</h4><strong>Student</strong></div>
            <p className="testemon-text">Želim da se zahvalim cjelom Timu koji su ispunili mom srcu želju ,obavili svoj posao kao niko do sada što uspio nije ,niti će.</p>
          </Grid>
          <Grid item  xs={12} md={4}>
            <div class="MuiGrid-root avatar"><img src={Person2} alt="person female thumb" /></div>
            <div class="MuiGrid-root tstAuthor">  <h4>Jovana Stojiljkovic</h4><strong>Medicinski radnik</strong></div>
            <p className="testemon-text">Veoma pouzdani u radu a naročito bih istakao efikasno poslovanje elektronskim putem što je velika ušteda vremena meni kao klijentu.</p>
          </Grid>
          <Grid item  xs={12} md={4}>
            <div class="MuiGrid-root avatar"><img src={Person3} alt="person young thumb" /></div>
            <div class="MuiGrid-root tstAuthor"><h4>Srdjan Stojanovic</h4><strong>Gimnazijalac</strong></div>
            <p className="testemon-text">Odlicna podrska,odlicana usluga,samo tako naprijed..</p>
          </Grid>

        </Grid>
      </div>

    </section>
  </div>);
};

export default Home;
