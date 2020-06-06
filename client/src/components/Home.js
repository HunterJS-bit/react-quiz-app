import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hero from './common/Hero';
import BlogCard from './Blog/BlogCard';

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
            <h1 className="mt-0 font-normal text-44">Our Blog</h1>
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
            <h1 className="mt-0 font-normal text-44">Testemonials </h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div class="MuiGrid-root avatar"><img src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMtaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzEzOCA3OS4xNTk4MjQsIDIwMTYvMDkvMTQtMDE6MDk6MDEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxQkNDMzJDRTVFMzExRTk4NjZDREUyNkRDODgwNEM4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxQkNDMzJCRTVFMzExRTk4NjZDREUyNkRDODgwNEM4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4REVDQjAyOUQ1NUQxMUU5OEIzRUVDRDdENTQ5N0RFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4REVDQjAyQUQ1NUQxMUU5OEIzRUVDRDdENTQ5N0RFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAEBAQEBAQEBAQEBAQEBAQEB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" alt="user thumb" /></div>
        <div class="MuiGrid-root tstAuthor"><h4>Alfred Roy</h4><strong>CEO</strong></div>
        <p>Nam quis laoreet nisl. Vivamus nec quam magna. Cras interdum metus blandit hendrerit ornare. Sed id leo nulla. Etiam ornare imperdiet ligula, sit amet gravida felis bibendum eget. Lorem ipsum dolor sit amet.</p>
      </div>

    </section>
  </div>);
};

export default Home;
