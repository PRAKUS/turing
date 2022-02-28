import React from "react";
import { Link } from "react-router-dom";
const max_length = 250;
const BlogCard = (props) => {
	let article = props.blog.article.substring(0, max_length);
	return (
		<div className='d-flex flex-column border shadow '>
			<div className='d-flex flex-column'>
				<img
					className='blogCard-cover'
					alt=' '
					src={props.blog.CoverPic[0].url}
				/>
				<img
					className='blogCard-profile mx-4'
					alt=' '
					src={props.blog.authorPic.url}
				/>
			</div>
			<div className='d-flex flex-column px-4'>
				<header className='h5'>{props.blog.title}</header>
				<article className='my-2' style={{ fontSize: "12px" }}>
					{article}....
				</article>
				<Link
					to={`${props.blog._id}`}
					className='btn border btn-sm border-primary'>
					Read More
				</Link>
			</div>
			<div className='d-flex  bg-light px-4  my-2'>
				<small>{props.blog.author}</small>
				<small className='ml-auto'>
					{props.blog.published_at.substring(0, 10)}
				</small>
			</div>
		</div>
	);
};

export default BlogCard;
