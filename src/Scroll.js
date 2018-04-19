import React from 'react';

const Scroll = (props) => {
	return (
		// {{}} jsx object in js expression
		<div style={{overflowY: 'scroll', border: '1px solid black', height: '800px'}}>
		  { props.children }
		</div>
	);
};

export default Scroll;