import React from "react";
import { Row, Col } from "react-bootstrap";
const Solution = (props) => {
	let flip = props.direction;
	const fliper = () => {
		if (flip === "right") {
			return (
				<Row className='d-flex  p-4  mt-2'>
					<Col xs={12} s={12} md={6} lg={6} xl={6} className=''>
						{props.children}
					</Col>
					<Col
						xs={12}
						s={12}
						md={6}
						lg={6}
						xl={6}
						className='d-flex justify-content-center overflow-hidden'>
						<img
							src={props.img}
							className='solution-imageContainer'
							alt='webdev'
						/>
					</Col>
				</Row>
			);
		} else if (flip === "left") {
			return (
				<Row className='d-flex  p-4  mt-2'>
					<Col
						xs={12}
						s={12}
						md={6}
						lg={6}
						xl={6}
						className=' d-flex justify-content-center overflow-hidden'>
						<img
							src={props.img}
							className='solution-imageContainer'
							alt='webdev'
						/>
					</Col>
					<Col xs={12} s={12} md={6} lg={6} xl={6} className=''>
						{props.children}
					</Col>
				</Row>
			);
		}
	};
	return <div>{fliper()}</div>;
};

export default Solution;
