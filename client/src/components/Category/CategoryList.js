import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { axiosInstance } from "../../util/axios";
import Banner from "../common/Banner";



const CategoryList = ({ history }) => {
  const [categoryList, setCategoryList] = useState([]);

  const goToPage = (category) => {
    const { slug } = category;
    history.push(`/category/${slug}`, category);
  };

  useEffect(() => {
    console.log("inside use effect");
    const fetchData = async () => {
      const { data } = await axiosInstance.get("/category/main");
      setCategoryList(data);
    };
    fetchData();
  }, []);

  return (
    <div className="categories">
      <Banner title="Lista akategorija" subtitle="Kategorije"></Banner>
      <section id="car-categories">
        <Container container fixed={true} maxWidth="lg">
          <Grid container spacing={6}>
            {categoryList.map((cat, i) => {
              return (
                <CategoryCard
                  key={i}
                  index={i + 1}
                  category={cat}
                  navigate={goToPage}
                ></CategoryCard>
              );
            })}
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default CategoryList;
