import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import Cards from "../component/Cards";
import Carsoule from "../component/Carsoule";
const AboutBanner = (props) => {
	return (
		<div className={props.className + "  overflow-hide "}>
			<div className='slider-foreground w-100 about-banner '>
				<div className='slider-content'> {props.children}</div>
			</div>
			<img
				className='w-100 sm-img '
				style={{ marginTop: "-20%", marginLeft: "3%" }}
				src={props.background}
				alt={props.alternativeTex}
			/>
		</div>
	);
};

const EmployeeCard = () => {
	return (
		<Card className='d-flex align-items-center flex-column p-4 mx-2'>
			<Card.Img
				className='rounded-circle '
				alt='image des'
				src='image/profile.png '
			/>

			<Card.Body>
				<header className='text-center'>Employee Name</header>
				<p>Employee Description</p>
			</Card.Body>
		</Card>
	);
};

const About = () => {
	return (
		<div>
			<Helmet>
				<title>About</title>
			</Helmet>
			<section className='slider-container about-banner '>
				<AboutBanner className='w-100' background='image/aboutBanner.jpg'>
					<header
						className='text-white h2 text-left'
						style={{ fontSize: "100px" }}>
						TURING
					</header>
					<header
						style={{ fontSize: "120px" }}
						className='text-white h1 text-left'>
						SOFTECH
					</header>
					<p className='text-white h2'>Know Who We are.....</p>
				</AboutBanner>
			</section>

			<section className='container  m-space'>
				<Row>
					<Col xs={12} sm={12} md={4} lg={4} xl={4}>
						<Cards img='image/quality.png' alt='quality'>
							<p className='h4 text-center'>Who we are?</p>
							<p className=' text-left pf'>
								We have something for everyone, may be you are from company or
								indivual who wants to get digital.We will serve you well.
							</p>
						</Cards>
					</Col>
					<Col xs={12} sm={12} md={4} lg={4} xl={4} className=' '>
						<Cards img='image/ontime.png' alt='ontime'>
							<p className='h4 text-center'>Who we are not.</p>
							<p className=' text-left pf'>
								We have something for everyone, may be you are from company or
								indivual who wants to get digital.We will serve you well.
							</p>
						</Cards>
					</Col>
					<Col xs={12} sm={12} md={4} lg={4} xl={4}>
						<Cards img='image/affordable.png' alt='ontime'>
							<p className='h4 text-center'>What We Do?</p>
							<p className=' text-left pf'>
								We have something for everyone, may be you are from company or
								indivual who wants to get digital.We will serve you well.
							</p>
						</Cards>
					</Col>
				</Row>
			</section>
			<section className='container m-space'>
				<header className='h1 text-center'>History of Us</header>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tellus
					semper, ultrices tellus sit amet, imperdiet eros. Duis sollicitudin
					aliquet est, non molestie velit dictum et. Praesent aliquet velit
					nunc, nec mollis elit elementum et. Integer varius nisl neque, non
					finibus nibh molestie varius. Donec commodo massa ac urna congue
					sagittis. Etiam leo erat, tempus et ornare nec, tincidunt sed orci.
					Pellentesque aliquam tincidunt purus, vel rhoncus quam ornare maximus.
					Suspendisse eu lobortis ex, ac ultrices sapien. Sed non ipsum vel
					purus laoreet volutpat. Phasellus nunc arcu, semper sed odio sed,
					euismod tincidunt nulla. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas.
				</p>
			</section>
			<section className='container m-space'>
				<header className='h1 text-center'>Our Team</header>
				<Carsoule>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
					<EmployeeCard></EmployeeCard>
				</Carsoule>
			</section>
			<section className=' m-space'>
				<header className='h1 text-center'>Our Customer</header>
				<div className='d-flex overflow-hide  justify-content-center'>
					<div style={{ height: "200px" }} className='bg-warning w-100'>
						a
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
