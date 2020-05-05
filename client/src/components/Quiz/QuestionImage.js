import React from 'react';

const QuestionImage = (props) => {

    const { image } = props;

    // todo take app URL from env or server

    const imgUrl = `http://localhost:3000/uploads${image}`;

    if (image) {
        return (<img src={imgUrl}></img>)
    }

    return null;

}

export default QuestionImage;