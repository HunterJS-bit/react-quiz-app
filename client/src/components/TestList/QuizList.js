import React, { useState, useEffect} from 'react';
import { axiosInstance } from '../../util/axios';
import Grid from '@material-ui/core/Grid';
import QuizCard from './QuizCard';

/* A Component to render List of Tests per Category */

const QuizList = (props) => {
  const historyState = props.location.state;

  const { name: catName, _id: id } = historyState;

  const [quizList, setQuizList] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const result = await axiosInstance.get(`/quiz/${props.location.state['_id']}/list`);
      setQuizList(result.data);
    };
    fetchData();
  }, [])

  return (<div className="quiz-list">
    <section class="page-banner bg-contain bg-bottom d-flex align-items-center">
				<Grid container spacing={3}>
					<Grid item xs={12} md={12}>
						<div className="container">
							<div className="banner-text">
								<span>Odabrali ste</span>
								<h2>Testove iz {catName}</h2>
							</div>
						</div>
					</Grid>
				</Grid>
			</section>
      <section id="list-tests">
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
            <Grid container spacing={3}>
              {
                    quizList.map((quiz) => {
                      return (<QuizCard key={quiz._id} quiz={quiz} category={catName} categoryId={id} ></QuizCard>)
                    })
                  }
            </Grid>
          </div>	
     </section>
  </div>);
};

export default QuizList;




