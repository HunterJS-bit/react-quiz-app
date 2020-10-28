import React, { useState, useEffect } from 'react';
import { axiosInstance } from '../../util/axios';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import QuizCard from './QuizCard';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Banner from "../common/Banner";

/* A Component to render List of Tests per Category */

const StyledCard = styled(Grid)`
border-radius: 4px;
background: #fff;
box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
padding: 14px 80px 18px 36px;
cursor: pointer;
background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
background-repeat: no-repeat;
background-position: right;
background-size: 80px;
`;

const CardText = styled.div`
`;

const CardTitle = styled(Typography)`
font-size: 24px;
font-weight: 600;
margin-top: 20px;
    margin-bottom: 10px;
`;

const QuizList = (props) => {
  const historyState = props.location.state;

  const { name: catName, _id: id } = historyState;

  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosInstance.get(`/quiz/${props.location.state['_id']}/list`);
      setQuizList(result.data);
    };
    fetchData();
  }, [])

  return (<div className="quiz-list">
    <Banner title="Odabrali ste" subtitle={`Pitanja iz ${catName}`}> </Banner>
    <section id="list-tests">
      <Container container fixed={true} maxWidth="lg">
        <div className="container">
          <Grid container
            justify="center">
            <Grid item>
              <div className="previewSectionTitle">
                <p>Our Awesome Feature</p>
                <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</h2>
              </div>
            </Grid >
          </Grid>
          <Grid container spacing={6}>
            {
              quizList.map((quiz) => {
                return (<StyledCard item xs={12} md={4} >
                  <div class="">
                    <CardTitle variant="h3">Test 1</CardTitle>
                    <Typography variant="body1" gutterBottom>
                      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                    </Typography>
                  </div>
                </StyledCard>)
              })
            }

            {/* {
              quizList.map((quiz) => {
                return (<QuizCard key={quiz._id} quiz={quiz} category={catName} categoryId={id} ></QuizCard>)
              })
            } */}
          </Grid>
        </div>
      </Container>
    </section>
  </div>);
};

export default QuizList;




