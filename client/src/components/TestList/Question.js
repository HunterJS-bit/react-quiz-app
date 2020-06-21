import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '../../assets/check.svg';
import Icon from '@material-ui/core/Icon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Question = (props) => {

    const { question, image, options, answers } = props.question;

    console.log(props.question);
    const renderImage = () => {
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

    const shouldShowCheckmark = (key) => {
        return answers.includes(key);
    }

    return (<Grid item xs={12} sm={6}>
        <div className="question-wrapper">
            { renderImage() }
            <div>
                <h4 className="title">{ question }</h4>
                <div className="mt-4 mb-8 relative">
                    <div className="MuiGrid-root MuiGrid-container">
                    <List component="nav" aria-label="main mailbox folders">
                        {
                            options.map((option, index) => {
                                // return  <Grid item xs={12} md={12}><span class="font-medium p-2px">{option}</span></Grid>;
                                return (<div key={index} className="answer">
                                            <ListItem >
                                                <ListItemText primary={option} />
                                                 {
                                                     shouldShowCheckmark(index) ? <ListItemSecondaryAction>
                                                       <Icon>
                                                           <img className="check-mark" src={CheckIcon} />
                                                       </Icon>
                                                   </ListItemSecondaryAction> : null
                                                 }                                                          
                                            </ListItem>
                                           <Divider/>
                                </div>)
                            })
                        }
                        </List>
                    </div>
                </div>
            </div>
        </div>
    </Grid>);
};

export default Question;