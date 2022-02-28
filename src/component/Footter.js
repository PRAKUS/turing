import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
	let blog = JSON.parse(sessionStorage.getItem("blog"));
	let latestBlog;
	let section = useRef(null);
	useEffect(() => {
		section.current.scrollTo(0, 0);
	});

	if (blog) {
		latestBlog = blog.slice(0, 3).map((blog) => {
			return (
				<li key={blog._id} className='py-2 '>
					<Link to={`${blog._id}`}>
						<div className='d-flex  align-items-center'>
							<img
								src=''
								className='bg-light'
								style={{ height: "50px", width: "80px" }}
								alt=''
							/>
							<div className='d-flex flex-column ml-1'>
								<p>{blog.title}</p>
								<small>{blog.published_at.substring(0, 10)}</small>
							</div>
						</div>
					</Link>
				</li>
			);
		});
	}

	return (
		<Row ref={section} className='m-0 '>
			{/* {window.addEventListener("resize", screenChange)} */}
			<Col xl={3} lg={3} md={3} sm={12} xs={12} className='pt-4 '>
				<img
					src='logo.png'
					style={{
						height: "40px",
					}}
					alt='logo'
				/>

				<p className='my-3 text-secondary   '>
					kalimpong <br />
					West Bengal, India
				</p>

				<ul className='list-inline mt-2'>
					<li>
						{/* <Iconcontainer color=' #3395ff' label='teamwhocares123@gmail.com'>
							<AiOutlineMail />{" "}
						</Iconcontainer> */}
					</li>
					<li>
						{/* <Iconcontainer color=' #3395ff' label='+91-9876543210'>
							<FaPhoneAlt />{" "}
						</Iconcontainer> */}
					</li>
				</ul>
			</Col>
			<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' pt-4'>
				<header className='primary-title border-bottom pb-2 text-secondary'>
					Pages
				</header>
				<ul className='list-inline mt-2 '>
					<li>
						<a className='text-secondary text-decoration-none' href='/home '>
							Home
						</a>
					</li>
					<li>
						<a className='text-secondary text-decoration-none' href='/about'>
							About
						</a>
					</li>
					<li>
						<a className='text-secondary text-decoration-none' href='/services'>
							Services
						</a>
					</li>
					<li>
						<a className='text-secondary text-decoration-none' href='/industry'>
							Industries we serve
						</a>
					</li>
					<li>
						<a className='text-secondary text-decoration-none ' href='/blogs'>
							Blogs
						</a>
					</li>
				</ul>
			</Col>
			<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' p-4'>
				<header className='primary-title border-bottom pb-2 text-secondary'>
					Needs Help?
				</header>
				<ul className='list-inline mt-2 text-secondary'>
					<li>
						<a className='text-secondary text-decoration-none ' href='/faq'>
							Frequently Asked Questions?
						</a>
					</li>
					<li>
						<a
							className='text-secondary text-decoration-none '
							href='/requestquote'>
							Contact Us
						</a>
					</li>
					<li>
						<a
							className='text-secondary text-decoration-none '
							href='/requestquote'>
							Privacy Policy
						</a>
					</li>
				</ul>
			</Col>
			<Col xl={3} lg={3} md={3} sm={12} xs={12} className=' p-4'>
				<header className='primary-title border-bottom pb-2 text-secondary'>
					Latest Blogs
				</header>
				<ul className='list-inline mt-2 text-secondary'>{latestBlog}</ul>
			</Col>

			<Col xl={12} lg={12} sm={12} md={12} xs={12}>
				<Row>
					<Col
						xl={12}
						lg={12}
						sm={12}
						md={12}
						xs={12}
						className='text-white text-center'>
						All right reserved by TuringSoftech
					</Col>
				</Row>
			</Col>
		</Row>
	);
};

export default Footer;
