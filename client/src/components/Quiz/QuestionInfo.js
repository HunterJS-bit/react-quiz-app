import React from 'react';

const QuestionInfo = (props) => {

    const { info } = props;

    if (info.length > 1) {
        return (<p>{info.length} odgovora su tacna</p>);
    }

    return null;
};

export default QuestionInfo;