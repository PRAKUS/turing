import React from "react";
import { Col, Row } from "react-bootstrap";

const WorkFlow = () => {
	return (
		<Row className='section  py-2  '>
			<div></div>
			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className='process border-right  border-primary'>
				<header className='h5'>Requirement Analysis</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
					varius arcu, ac sodales dolor. Nullam rutrum massa id tempor accumsan.
					Vestibulum egestas pulvinar nisl, nec tristique tortor{" "}
				</p>
			</Col>
			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className=' d-flex  align-items-center '>
				<img
					className='image-container '
					src='image/analysis.png'
					alt='analysis'
				/>
			</Col>

			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className=' d-flex border-right border-primary align-items-center  '>
				<img className='image-container' src='image/uiux.png' alt='analysis' />
			</Col>
			<Col xs={6} s={6} md={6} lg={6} xl={6} className='process  '>
				<header className='h5'>UI/UX Design</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
					varius arcu, ac sodales dolor. Nullam rutrum massa id tempor accumsan.
					Vestibulum egestas pulvinar nisl, nec tristique tortor{" "}
				</p>
			</Col>

			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className='border-right process  border-primary'>
				<header className='h5'>Devlopment</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
					varius arcu, ac sodales dolor. Nullam rutrum massa id tempor accumsan.
					Vestibulum egestas pulvinar nisl, nec tristique tortor{" "}
				</p>
			</Col>
			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className=' d-flex align-items-center'>
				<img
					className='image-container'
					src='image/devlopment.png'
					alt='analysis'
				/>
			</Col>

			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className=' d-flex border-right   align-items-center  border-primary'>
				<img
					className='image-container'
					src='image/testing.png'
					alt='testing'
				/>
			</Col>
			<Col xs={6} s={6} md={6} lg={6} xl={6} className='process'>
				<header className='h5'>Testing</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
					varius arcu, ac sodales dolor. Nullam rutrum massa id tempor accumsan.
					Vestibulum egestas pulvinar nisl, nec tristique tortor{" "}
				</p>
			</Col>

			<Col xs={6} s={6} md={6} lg={6} xl={6} className='process'>
				<header className='h5'>Launch</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
					varius arcu, ac sodales dolor. Nullam rutrum massa id tempor accumsan.
					Vestibulum egestas pulvinar nisl, nec tristique tortor{" "}
				</p>
			</Col>
			<Col
				xs={6}
				s={6}
				md={6}
				lg={6}
				xl={6}
				className=' d-flex align-items-center '>
				<img className='image-container' src='image/launch.png' alt='launch' />
			</Col>
		</Row>
	);
};
export default WorkFlow;
