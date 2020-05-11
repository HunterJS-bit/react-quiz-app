import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { purple } from '@material-ui/core/colors';

const StyledNextButton = styled(Button)`
    color: ${props =>
        props.theme.palette.getContrastText(purple[500])};
    background-color: ${purple[500]};
    &:hover {
        background-color: purple[700],
    }
`;


const ChangeQuestion = (props) => {


    const { nextQuestion } = props; 

    return (<StyledNextButton
                variant="contained"
                color="default"
                onClick={nextQuestion} >
                Next Question ->
            </StyledNextButton>)
};

export default ChangeQuestion;