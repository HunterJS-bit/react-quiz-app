import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Pagination } from '@material-ui/lab';



const ViewQuestions = (props) => {

    const [page, setPage ] = useState(1);

    const pageChanged = () => {
        console.log('page changed');
    };

    return (<div class="question-list">
             <section class="page-banner bg-contain bg-bottom d-flex align-items-center">
				<Grid container spacing={3}>
					<Grid item xs={12} md={12}>
						<div class="container">
							<div class="banner-text">
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