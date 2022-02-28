import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogReader = (props) => {
	let blog = JSON.parse(sessionStorage.getItem("blog"));
	window.scrollTo(0, 0);
	let blogsData;
	if (blog) {
		for (let i = 0; i < blog.length; i++) {
			if (props.match.params.id === blog[i]._id) {
				blogsData = blog[i];
			}
		}
	}

	return (
		<section className='container'>
			<Row className='  m-space'>
				<Col xs={12} sm={12} md={9} lg={9} xl={9} className='shadow p-4'>
					<header className='text-center'>{blogsData.title}</header>
					<section>
						<img
							src={blogsData.CoverPic}
							alt={blogsData.CoverPic[0].alternativeText}
						/>
					</section>
					<section className='p-4'>
						<article>{blogsData.article}</article>
					</section>
				</Col>
				<Col xs={12} sm={12} md={3} lg={3} xl={3}>
					<Row className='m-0 p-0'>
						<Col xs={12} sm={12} md={12} lg={12} xl={12} className='p-0'>
							<section>
								<div className='d-flex flex-column border shadow '>
									<div className='d-flex flex-column'>
										<img className='blogCard-cover' alt=' ' src={props.url} />
										<img
											className='blogCard-profile mx-4'
											alt=' '
											src={props.url}
										/>
									</div>
								</div>
								<div>
									<p className='text-center'>{props.author}</p>
									<p className='text-center'>{props.authordes}</p>
								</div>
								<div className='d-flex'></div>
							</section>
						</Col>
						<Col xl={12} lg={12} md={12} sm={12} xs={12} className='p-0 '>
							<header className='primary-title border-bottom pb-2 text-secondary'>
								Author's Blogs
							</header>
							<ul className='list-inline mt-2 text-secondary'>
								<li className='py-2 '>
									<Link to={`blogreader/${props.match.params.id}`}>
										<div className='d-flex  align-items-center'>
											<img
												src=''
												className='bg-light'
												style={{ height: "50px", width: "80px" }}
												alt=''
											/>
											<div className='d-flex flex-column ml-1'>
												<a href='/'>{props.title}</a>
												<small>{props.published_at}</small>
											</div>
										</div>
									</Link>
								</li>
								<li className='py-2'>
									<a href='/'>
										<div className='d-flex  align-items-center'>
											<img
												src=''
												className='bg-light'
												style={{ height: "50px", width: "80px" }}
												alt=''
											/>
											<div className='d-flex flex-column ml-1'>
												<a href='/'>{blog[1].title}</a>
												<small>{blog[1].published_at.substring(0, 10)}</small>
											</div>
										</div>
									</a>
								</li>
								<li className='py-2'>
									<a href='/'>
										<div className='d-flex  align-items-center'>
											<img
												src=''
												className=' bg-light'
												style={{ height: "50px", width: "80px" }}
												alt=''
											/>
											<div className='d-flex flex-column ml-1'>
												<a href='/'>Blog Title</a>
												<small>23.06.2021</small>
											</div>
										</div>
									</a>
								</li>
							</ul>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default BlogReader;
