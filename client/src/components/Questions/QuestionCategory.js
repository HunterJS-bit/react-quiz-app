import React, { useState, useEffect } from 'react';

const QuestionCategory = (props) => {

    const { category, updateCat, removeCat } = props;

    const [edit, toogleEdit] = useState(false);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        setPosition(props.category.position);
    }, [props.category])

    const showEdit = (e) => {
        e.preventDefault();
        toogleEdit(!edit);
        // do save action & update category position in list
        if (edit) {
            updateCat(category.id, position);
        }
    };


    const updateCategory = (newPostion) => {
        const newPos = parseInt(newPostion);
        setPosition(newPos);
    };

    const showPosition = () => {
        if (edit) {
            return <input type="number" value={position} onChange={(e) => updateCategory(e.target.value)}></input>;
        } else {
            return <p>Position {position}</p>;
        }
    };
    return (<div className="question-cat-wrapper">
        <p>{ category.name }</p>
        { showPosition() }
        <div> <button onClick={showEdit}> { edit ? 'Save' : 'Edit' }</button>
            <button onClick={(e) => removeCat(e, category)}>X</button></div>
    
    </div>)
};

export default QuestionCategory;