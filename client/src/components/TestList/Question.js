import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '../../assets/check.svg';
import Icon from '@material-ui/core/Icon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';


const QuestionWrapper = styled.div`
padding: 15px 20px 15px 15px;
    background: #FFFFFF;
    box-shadow: 0 0.5rem 5rem rgba(0, 0, 0, 0.4);
`;

const QuestionTitle = styled(Typography)`
font-size: 1.7rem;
    line-height: 3rem;
    padding-left: 3rem;
    color: #313131;
`;

const QuestionOption = styled(ListItem)`
position: relative;
height: 70px;
font-size: 1.8rem;
line-height: 7rem;
padding-left: 3rem;
border-top: 1px solid #e7e7e7;
`;

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
            return;
        }
    }

    const shouldShowCheckmark = (key) => {
        return answers.includes(key);
    }

    return (<Grid item xs={12} md={6}>
        <QuestionWrapper>
            {renderImage()}
            <QuestionTitle>{question}</QuestionTitle>
            <div>
                <div className="mt-4 mb-8 relative">
                    <div className="MuiGrid-root MuiGrid-container">
                        <List component="nav" aria-label="main mailbox folders">
                            {
                                options.map((option, index) => {
                                    return (<QuestionOption>
                                        <ListItemText primary={option} />
                                        {
                                            shouldShowCheckmark(index) ? <ListItemSecondaryAction>
                                                <Icon>
                                                    <img className="check-mark" src={CheckIcon} />
                                                </Icon>
                                            </ListItemSecondaryAction> : null
                                        }
                                        <Divider />
                                    </QuestionOption>)
                                })
                            }
                        </List>
                    </div>
                </div>
            </div>
        </QuestionWrapper>
    </Grid>);
};

export default Question;