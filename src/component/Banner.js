import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import RequestQuote from "../component/RequestQuote";

const Banner = () => {
	return (
		<div className='container'>
			<Row>
				<Col
					xs={12}
					sm={12}
					md={6}
					lg={6}
					xl={6}
					className='d-flex flex-column justify-content-center pt-3'
					style={{ zIndex: "9" }}>
					<p className='text-white h1'>Your gateway to</p>
					<p className='text-white h1'> Digital world</p>
					<p className='h5 text-white  '>We belive in quality product</p>
					<p className=' w-100 text-white pf '>
						The place where your idea are crafted in the way the user want.
						Increasing your online presense.
					</p>
					<div className='d-flex '>
						<Link to='about'>
							<button className='btn border-white   text-white'>
								{" "}
								learn More{" "}
							</button>
						</Link>
						<RequestQuote className='border-white bg-transparent ml-1' />
					</div>
				</Col>
				<Col xs={12} sm={12} md={6} lg={6} xl={6} className='overflow-hide '>
					<img src='image/banner.png' alt='  ' className='banner-image' />
				</Col>
			</Row>
		</div>
	);
};

export default Banner;
