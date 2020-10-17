import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Pagination } from '@material-ui/lab';
import { axiosInstance } from '../../util/axios';
import Question from './Question';



const ViewQuestions = (props) => {

    const [page, setPage ] = useState(1);
    const [list, setList] = useState([]);
    const [count, setCount] = useState(0);
    const [questionsOnPage, setQuestionsOnPage] = useState([]);
    const testId = props.location.state.detail;
    const category = props.location.state.category;
    const perPage = 4;

    useEffect(() => {

        console.log('test id', testId);
        async function fetchMyAPI() {
            let { data } = await axiosInstance.post(`/quiz/${category}/${testId}/questions`);
            setList(data.questions);
            let current = data.questions.slice(0, perPage);
            setQuestionsOnPage(current);
            const totalPages = Math.ceil(data.questions.length / perPage);
            setCount(totalPages);
        }
      
        fetchMyAPI();
    }, [])

    const pageChanged = (event, value) => {
        setPage(value);
        let index = (value-1) * perPage;
        const slicedItems = list.slice(index, index + perPage);
        setQuestionsOnPage(slicedItems);
    };

    const downloadPdf = async () => {
        console.log('download pdf');
        let { data } = await axiosInstance.post(`/quiz/${category}/${testId}/pdf`);
        const buffer = Buffer.from(data.data, 'binary');
        const blob = new Blob([buffer], { type: "application/pdf", encoding: 'UTF-8' });
        const a = document.createElement('a');
        a.style = 'display: none';
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = `Test_${testId}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

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
                <Button variant="contained" color="primary" onClick={downloadPdf}>Download as PDF</Button>
                    <div className="container">
                        <Grid container spacing={3}>
                        { questionsOnPage.map((item, index) => {
                            return <Question key={index} question={item}></Question>;
                        }) }
                        </Grid>
                        <Box mt={7}>
                            <Grid container justify="center" alignItems="center">
                                <Pagination count={count} page={page} onChange={pageChanged} />
                            </Grid>
                        </Box>
                    </div>
            </section>
        </div>
    );
};


export default ViewQuestions;