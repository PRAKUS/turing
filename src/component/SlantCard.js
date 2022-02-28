import React from "react";

const SlantCard = () => {
	return (
		<div className='viewport'>
			<div className='static-slantdiagonal '>
				<p className='text'>FOOD INDUSTRY</p>
				<img className='image' src='image/food.jpeg' alt='' />
			</div>
			<div className='diagonal-card '>
				<p className='text'>HEALTH SYSTEM</p>
				<img className='image' src='image/hospital.jpg' alt='' />
			</div>
			<div className='diagonal-card'>
				<p className='text'>EDUCATION</p>
				<img className='image' src='image/edu.jpeg' alt='' />
			</div>
			<div className='diagonal-card '>
				<p className='text'>PORTFOLIOS</p>
				<img className='image' src='image/personal.jpg' alt='' />
			</div>
			<div className='diagonal-card active-daigonalCard '>
				<img className='image' src='image/travel.jpg' alt='' />
			</div>
		</div>
	);
};

export default SlantCard;
