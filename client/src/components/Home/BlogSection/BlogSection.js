import React from "react";
import Grid from "@material-ui/core/Grid";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <section id="blog-section">
      <div className="container">
        <div className="mb-16">
          <h1 className="mt-0 font-normal text-44">Blog</h1>
          <p>Poslednji clanci dodati iz bloga</p>
        </div>
        <Grid container spacing={5} alignItems="center" justify="center">
          {[1, 2, 3, 4].map((e) => {
            return (
              <Grid item key={e} md={3}>
                <BlogCard></BlogCard>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default BlogSection;
