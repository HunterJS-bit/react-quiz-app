import React from 'react';
import Grid from '@material-ui/core/Grid';

const Question = (props) => {

    const { question, image, options } = props.question;

    const renderImagen = () => {
        if (image) {
            return <div >
                <div class="p-2px inline-block rounded circle-holder">
                    <div class="w-76 h-76 rounded bg-light-primary flex-column justify-center items-center text-primary">
                        <h4 class="font-medium m-0">11</h4>
                        <small>Oct</small>
                    </div>
                </div>
            </div>
        } else {
            return ;
        }
    }

    return (<Grid item xs={12} sm={6}>
        <div class="question-wrapper">
            { renderImagen() }
            <div>
                <h4 class="event-title m-0 text-primary font-normal">{ question }</h4>
                <div class="mt-4 mb-8 relative">
                    <div class="MuiGrid-root MuiGrid-container">
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3"><span class="font-medium">Address:</span></div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9">Lorem ipsum dolor sit amet, Consete</div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3"><span class="font-medium">Time:</span></div>
                        <div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9">11: 30 AM to 05:30 PM</div>
                    </div>
                </div>
            </div>
        </div>
    </Grid>);
};

export default Question;