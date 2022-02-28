import React from "react";

const Cards = (props) => {
	return (
		<div>
			<div className='d-flex justify-content-center'>
				<img className='icon-medium' src={props.img} alt=' ' />
			</div>
			<div className='d-flex flex-column'>{props.children}</div>
		</div>
	);
};

export default Cards;
