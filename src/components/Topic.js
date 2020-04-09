import React from 'react';


const Topic = (props) => {

	const id = props.match.params.id;

  return (<h1>herere is topic { id }</h1>);
};

export default Topic;
