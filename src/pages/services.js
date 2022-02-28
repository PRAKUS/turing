import React, { useEffect, useState } from "react";
import { Tab, Tabs, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import axios from "axios";

const Slider = (props) => {
	return (
		<div className={props.className + "  overflow-hide"}>
			<div className='slider-foreground w-100'>
				<div className='slider-content '> {props.children}</div>
			</div>
			<img
				className=' w-100'
				src={props.background}
				alt={props.alternativeText}
			/>
		</div>
	);
};
const ServiceBox = (props) => {
	return (
		<div style={props.style} className='D-scence'>
			<div className='D-cube'>
				<div className='D-face D-face-back '>
					<img
						className='h-100'
						src='image/webdev.png'
						alt={props.alternativeText}
					/>
				</div>
				<div className='D-face D-face-right '>
					<img
						className='h-100 w-100'
						src='image/webdes.png'
						alt={props.alternativeText}
					/>
				</div>
				<div className='D-face D-face-front text-center text-white'>
					<h1>OUR</h1>
					<h1>SERVICES</h1>
				</div>
				<div className='D-face D-face-left '>
					<img
						className='h-100 w-100'
						src='image/maintian.png'
						alt={props.alternativeText}
					/>
				</div>
				<div className='D-face D-face-top '>
					<img
						className='h-100 w-100'
						src='image/redesign.png'
						alt={props.alternativeText}
					/>
				</div>
				<div className='D-face D-face-bottom '>
					<img
						className='h-100 w-100'
						src='image/digitalMarketing.png'
						alt={props.alternativeText}
					/>
				</div>
			</div>
		</div>
	);
};

const ServiceCard = (props) => {
	return (
		<Row>
			<Col
				xs={12}
				sm={12}
				md={4}
				lg={4}
				xl={4}
				className='justify-content-center d-flex'>
				<img
					className='solution-imageContainer'
					alt={props.alternativeText}
					src={props.image}
				/>
			</Col>
			<Col
				xs={12}
				sm={12}
				md={8}
				lg={8}
				xl={8}
				className='d-flex flex-column justify-content-center'>
				<header className='h5'>{props.ServiceName}</header>
				<p className='pf'>{props.Description}</p>
				<p className='h6'>No Of Page: {props.pageNo}</p>
				<p className='h6'>Starts From : {props.Price}</p>
			</Col>
		</Row>
	);
};

const Services = () => {
	const url = "http://localhost:1337/services/";

	const [display, changeDisplay] = useState("");
	const [services, setServices] = useState(null);
	const displayChecker = () => {
		if (window.innerWidth <= 500) {
			changeDisplay("none");
		} else {
			changeDisplay("");
		}
	};
	useEffect(displayChecker);

	useEffect(() => {
		axios.get(url).then((response) => {
			setServices(response.data);
		});
	}, []);

	if (services) {
		services.map((service) => {
			return service;
			//console.log(service);
		});
	}
	return (
		<div>
			<Helmet>
				<title>Services</title>
			</Helmet>
			<section className='slider-container d-flex'>
				<div className='D-container' style={{}}>
					<ServiceBox style={{ display: display }} />
					{window.addEventListener("resize", () => {
						displayChecker();
					})}
				</div>

				<Slider background='image/serviceBanner.jpg'>
					<header className='w-100 text-white h1'>We provide Service</header>
					<header className='w-100 text-white h1'>
						For all type of Business
					</header>
					<p className='text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
						odio id mi blandit elementum. Curabitur id rhoncus justo, sed
						vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam
						maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna
						eu dignissim vehicula. Sed sollicitudin lacus quis purus varius
						egestas. Nullam ut sem eget dui scelerisque porta.
					</p>
				</Slider>
			</section>

			<section className='d-flex flex-column  container'>
				<header className='text-center m-space h1'>Services</header>
				<div className='m-space w-100 '>
					<Tabs
						className='justify-content-center '
						defaultActiveKey='webdev'
						id='uncontrolled-tab-example'>
						<Tab eventKey='webdev' title='Web Devlopment'>
							<ServiceCard
								image='image/webdev.png'
								packageName='Portifolio'
								packageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio id mi blandit elementum. Curabitur id rhoncus justo, sed vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna eu dignissim vehicula. Sed sollicitudin lacus quis purus varius egestas. Nullam ut sem eget dui scelerisque porta.'
								price='8000'
								pageNo='1-4'
							/>
						</Tab>
						<Tab eventKey='webdes' title='Web Design'>
							<ServiceCard
								image='image/webdev.png'
								packageName='Portifolio'
								packageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio id mi blandit elementum. Curabitur id rhoncus justo, sed vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna eu dignissim vehicula. Sed sollicitudin lacus quis purus varius egestas. Nullam ut sem eget dui scelerisque porta.'
								price='8000'
								pageNo='1-4'
							/>
						</Tab>
						<Tab eventKey='wbredes' title='Web Redesign'>
							<ServiceCard
								image='image/webdev.png'
								packageName='Portifolio'
								packageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio id mi blandit elementum. Curabitur id rhoncus justo, sed vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna eu dignissim vehicula. Sed sollicitudin lacus quis purus varius egestas. Nullam ut sem eget dui scelerisque porta.'
								price='8000'
								pageNo='1-4'
							/>
						</Tab>
						<Tab eventKey='webmaintian' title='Web Maintian'>
							<ServiceCard
								image='image/webdev.png'
								packageName='Portifolio'
								packageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio id mi blandit elementum. Curabitur id rhoncus justo, sed vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna eu dignissim vehicula. Sed sollicitudin lacus quis purus varius egestas. Nullam ut sem eget dui scelerisque porta.'
								price='8000'
								pageNo='1-4'
							/>
						</Tab>

						<Tab eventKey='Digital Marketing' title='Digital Marketing'>
							<ServiceCard
								image='image/webdev.png'
								packageName='Portifolio'
								packageDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id odio id mi blandit elementum. Curabitur id rhoncus justo, sed vulputate nulla. Duis dapibus sodales ex. Sed ac lacus nec quam maximus suscipit. Ut feugiat nec lacus ac dictum. Nam tempus magna eu dignissim vehicula. Sed sollicitudin lacus quis purus varius egestas. Nullam ut sem eget dui scelerisque porta.'
								price='8000'
								pageNo='1-4'
							/>
						</Tab>
					</Tabs>
				</div>
			</section>
		</div>
	);
};

export default Services;
