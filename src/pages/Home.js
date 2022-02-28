import React from "react";
import Cards from "../component/Cards";
import SlantCard from "../component/SlantCard";
import WorkFlow from "../component/WorkFlow";
import Solution from "../component/Solution";
import Banner from "../component/Banner";
import { Col, Row } from "react-bootstrap";
import BlogCard from "../component/BlogCard";
import { Helmet } from "react-helmet";

const Home = () => {
	let blog = JSON.parse(sessionStorage.getItem("blog"));
	let Blogs = null;

	if (blog) {
		Blogs = blog.slice(0, 3).map((blog) => {
			return (
				<Col
					key={blog._id}
					xs={12}
					sm={12}
					md={4}
					lg={4}
					xl={4}
					className='m-space'>
					<BlogCard blog={blog} />
				</Col>
			);
		});
	}

	return (
		<div>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<section className='banner'>
				<Banner />
			</section>
			<section className='container  m-space'>
				<Row>
					<Col xs={12} sm={12} md={4} lg={4} xl={4}>
						<Cards img='image/quality.png' alt='quality'>
							<p className='h4 text-center'>Quality Product</p>
							<p className=' text-center pf'>
								Anyone can create a product but most important thing is "Does it
								hold quality?". We belive in quality product that can help to
								boost your Business.
							</p>
						</Cards>
					</Col>
					<Col xs={12} sm={12} md={4} lg={4} xl={4} className=' '>
						<Cards img='image/ontime.png' alt='ontime'>
							<p className='h4 text-center'>On Time Delivery</p>
							<p className=' text-center pf'>
								The product we design will be deliver you on a time. Because we
								know how much times matter to you.
							</p>
						</Cards>
					</Col>
					<Col xs={12} sm={12} md={4} lg={4} xl={4}>
						<Cards img='image/affordable.png' alt='ontime'>
							<p className='h4 text-center'>Affordable Price</p>
							<p className=' text-center pf'>
								We pirotize everyone, may be you are big company or indivual who
								wants to go digital.We will serve as your need.
							</p>
						</Cards>
					</Col>
				</Row>
			</section>

			<section className='container m-space'>
				<p className='text-center m-space   h2 pb-4 '>Industries we serve</p>
				<SlantCard />
			</section>
			<section className='container'>
				<div className='m-space '>
					<p className='text-center h2  '>Process we folow</p>
					<p className='text-center   '>To serve you a quality product</p>
				</div>
				<WorkFlow></WorkFlow>
			</section>
			<section className='container'>
				<div className='m-space '>
					<p className='text-center h2  '>Service we provide</p>
					<p className='text-center   '>for your every need</p>
				</div>
				<Solution direction='right' img='image/webdev.png'>
					<header className='h4 '>WEB DEVLOPMENT</header>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
						varius arcu, ac sodales dolor. Nullam rutrum massa id tempor
						accumsan. Vestibulum egestas pulvinar nisl, nec tristique tortor
						ultrices fermentum. Aenean eu ligula sit amet massa malesuada
						varius. Nulla sed elit quis dui pretium rhoncus a lacinia purus.
						Donec tempus sit amet arcu aliquam mollis. Integer quis laoreet
						enim. Quisque pretium tortor mattis sollicitudin laoreet. Integer
						pulvinar orci eget orci feugiat, quis maximus ante bibendum. Integer
						tincidunt congue risus vitae mattis. Praesent in varius purus.
						Aliquam erat volutpat. Maecenas gravida massa ligula, a vestibulum
						arcu volutpat at. Vestibulum malesuada quam rhoncus ipsum lacinia
						rutrum.
					</p>
					<button className='btn border-primary '>learn More</button>
				</Solution>
				<Solution direction='left' img='image/webdes.png'>
					<header className='h4 '>WEB DESIGN</header>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
						varius arcu, ac sodales dolor. Nullam rutrum massa id tempor
						accumsan. Vestibulum egestas pulvinar nisl, nec tristique tortor
						ultrices fermentum. Aenean eu ligula sit amet massa malesuada
						varius. Nulla sed elit quis dui pretium rhoncus a lacinia purus.
						Donec tempus sit amet arcu aliquam mollis. Integer quis laoreet
						enim. Quisque pretium tortor mattis sollicitudin laoreet. Integer
						pulvinar orci eget orci feugiat, quis maximus ante bibendum. Integer
						tincidunt congue risus vitae mattis. Praesent in varius purus.
						Aliquam erat volutpat. Maecenas gravida massa ligula, a vestibulum
						arcu volutpat at. Vestibulum malesuada quam rhoncus ipsum lacinia
						rutrum.
					</p>
					<button className='btn border-primary '>learn More</button>
				</Solution>
				<Solution direction='right' img='image/maintian.png'>
					<header className='h4 '>WEB MAINTIANANCE</header>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
						varius arcu, ac sodales dolor. Nullam rutrum massa id tempor
						accumsan. Vestibulum egestas pulvinar nisl, nec tristique tortor
						ultrices fermentum. Aenean eu ligula sit amet massa malesuada
						varius. Nulla sed elit quis dui pretium rhoncus a lacinia purus.
						Donec tempus sit amet arcu aliquam mollis. Integer quis laoreet
						enim. Quisque pretium tortor mattis sollicitudin laoreet. Integer
						pulvinar orci eget orci feugiat, quis maximus ante bibendum. Integer
						tincidunt congue risus vitae mattis. Praesent in varius purus.
						Aliquam erat volutpat. Maecenas gravida massa ligula, a vestibulum
						arcu volutpat at. Vestibulum malesuada quam rhoncus ipsum lacinia
						rutrum.
					</p>
					<button className='btn border-primary '>learn More</button>
				</Solution>
				<Solution direction='left' img='image/redesign.png'>
					<header className='h4 '>WEB REDESIGN</header>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
						varius arcu, ac sodales dolor. Nullam rutrum massa id tempor
						accumsan. Vestibulum egestas pulvinar nisl, nec tristique tortor
						ultrices fermentum. Aenean eu ligula sit amet massa malesuada
						varius. Nulla sed elit quis dui pretium rhoncus a lacinia purus.
						Donec tempus sit amet arcu aliquam mollis. Integer quis laoreet
						enim. Quisque pretium tortor mattis sollicitudin laoreet. Integer
						pulvinar orci eget orci feugiat, quis maximus ante bibendum. Integer
						tincidunt congue risus vitae mattis. Praesent in varius purus.
						Aliquam erat volutpat. Maecenas gravida massa ligula, a vestibulum
						arcu volutpat at. Vestibulum malesuada quam rhoncus ipsum lacinia
						rutrum.
					</p>
					<button className='btn border-primary '>learn More</button>
				</Solution>
				<Solution direction='right' img='image/digitalMarketing.png'>
					<header className='h4 '>DIGITAL MARKETING</header>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
						varius arcu, ac sodales dolor. Nullam rutrum massa id tempor
						accumsan. Vestibulum egestas pulvinar nisl, nec tristique tortor
						ultrices fermentum. Aenean eu ligula sit amet massa malesuada
						varius. Nulla sed elit quis dui pretium rhoncus a lacinia purus.
						Donec tempus sit amet arcu aliquam mollis. Integer quis laoreet
						enim. Quisque pretium tortor mattis sollicitudin laoreet. Integer
						pulvinar orci eget orci feugiat, quis maximus ante bibendum. Integer
						tincidunt congue risus vitae mattis. Praesent in varius purus.
						Aliquam erat volutpat. Maecenas gravida massa ligula, a vestibulum
						arcu volutpat at. Vestibulum malesuada quam rhoncus ipsum lacinia
						rutrum.
					</p>
					<button className='btn border-primary '>learn More</button>
				</Solution>
			</section>
			<section className='container'>
				{" "}
				<p className='text-center m-space   h2 pb-4 '>Blogs</p>
				<Row>{Blogs}</Row>
			</section>
		</div>
	);
};

export default Home;
