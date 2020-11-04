import React from "react";
import Banner from "../common/Banner";
import Container from "@material-ui/core/Container";

const Blog = () => {
  return (
    <div className="blog">
      <Banner title="Our Blog" subtitle="Latest blog posts"></Banner>
      <section id="blog-posts">
        <Container container fixed={true} maxWidth="lg">
          <h1>Blog page</h1>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
