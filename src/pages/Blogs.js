import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";

const BlogBanner = () => {
	return (
		<div className='container h-100'>
			<Helmet>
				<title>Blogs</title>
			</Helmet>
			<Row className=' h-100 '>
				<Col xs={2} sm={2} md={2} lg={2} xl={2} className='bg-primary h-100'>
					<div className='b-position text-white'>B</div>
				</Col>
				<Col
					xs={10}
					sm={10}
					md={10}
					lg={10}
					xl={10}
					className='bg-white m-0 h-100 overflow-hidden d-flex'>
					<p className='blog-position text-primary '>BLOG</p>
					<p className='that-position text-center text-success'>
						T<br />H<br />
						A<br />
						T<br />
					</p>
					<div className='d-flex flex-column mx-2 inspireYou-position'>
						<p className='m-0  text-warning'>INSPIRE</p>
						<p className='m-0  text-danger'>YOU</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

const Blogs = () => {
	return (
		<div>
			<section className='blog-banner'>
				<BlogBanner />
			</section>
			<section
				className='   m-space'
				style={{
					marginTop: "-3%",
					zIndex: "9",
				}}>
				<div className='d-flex flex-row container h-100'>
					<div className='w-50'>
						<Card className=' text-white border-0'>
							<Card.Img src='image/blog1.jpg' alt='Card image' />
							<Card.ImgOverlay>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Text>Last updated 3 mins ago</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</div>
					<div className='w-25 h-100'>
						<Card className='border-0 text-white'>
							<Card.Img
								className='h-100'
								src='image/blog2.png'
								alt='Card image'
							/>
							<Card.ImgOverlay>
								<Card.Title>Card title</Card.Title>
								<Card.Text>
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</Card.Text>
								<Card.Text>Last updated 3 mins ago</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</div>
					<div className='d-flex flex-column w-25'>
						<div className='w-100'>
							<Card className='border-0 text-white'>
								<Card.Img src='image/blog2.png' alt='Card image' />
								<Card.ImgOverlay>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Card.Text>Last updated 3 mins ago</Card.Text>
								</Card.ImgOverlay>
							</Card>
						</div>
						<div className='w-100'>
							<Card className='text-white border-0'>
								<Card.Img src='image/blog2.png' alt='Card image' />
								<Card.ImgOverlay>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Card.Text>Last updated 3 mins ago</Card.Text>
								</Card.ImgOverlay>
							</Card>
						</div>
					</div>
				</div>
			</section>
			<section>
				<header className='text-center h1'>Web Devlopemnt</header>
				<Row>
					<Col></Col>
					<Col></Col>
				</Row>
			</section>
		</div>
	);
};

export default Blogs;
