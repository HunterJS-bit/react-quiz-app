import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';
import { axiosInstance } from '../../util/axios';



const ViewQuestions = (props) => {

    const [page, setPage ] = useState(1);
    const [list, setList] = useState([]);
    const testId = props.location.state.detail;
    const category = props.location.state.category;

    console.log('catss', category);

    useEffect(() => {

        console.log('test id', testId);
        async function fetchMyAPI() {
            let { data } = await axiosInstance.post(`/quiz/${category}/${testId}/questions`, {
                page: 1,
            });
            setList(data.questions)
        }
      
        fetchMyAPI();
    }, [])

    const pageChanged = (event, value) => {
        console.log('page changed');
        console.log('event ', event);
        console.log(value);
        setPage(value);
    };

    return (<div className="question-list">
             <section className="page-banner bg-contain bg-bottom d-flex align-items-center">
				<Grid container spacing={3}>
					<Grid item xs={12} md={12}>
						<div className="container">
							<div className="banner-text">
								<span>Lista pitanja</span>
								<h2>Iz Testa 1</h2>
							</div>
						</div>
					</Grid>
				</Grid>
			</section>
            <section id="view-questions">
                <p>View questions</p>

                <Pagination count={10} page={page} onChange={pageChanged} />
            </section>
        </div>
    );
};


export default ViewQuestions;