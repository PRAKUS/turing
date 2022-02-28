import React, { useEffect, useRef } from "react";
import RequestQuote from "../component/RequestQuote";
import { Helmet } from "react-helmet";

const SideButton = (props) => {
	return (
		<div className='side-button  ' onClick={props.onClick}>
			<p className='side-button-content'>{props.name}</p>
		</div>
	);
};

const Slider = (props) => {
	return (
		<div className={props.className + "  overflow-hide"}>
			<div className='slider-foreground '>
				<div className='slider-content'>
					{" "}
					{props.children}
					<RequestQuote className='bg-transparent border-white' />
				</div>
			</div>
			<img
				className='w-100 sm-img'
				alt={props.alternativeText}
				src={props.background}
			/>
		</div>
	);
};

const Industry = () => {
	const slides = useRef(null);
	const sideButton = useRef(null);

	useEffect(() => {
		currentSlide(0);
	});
	const currentSlide = (slideNo) => {
		for (let i = 0; i < slides.current.children.length; i++) {
			slides.current.children[i].style.transition = "all 0.10s";
			slides.current.children[i].style.display = "none";
			sideButton.current.children[i].style.transition = "all 0.10s";
			sideButton.current.children[i].style.backgroundColor = "white";
			sideButton.current.children[i].style.color = "black";
		}

		slides.current.children[slideNo].style.display = "block";
		sideButton.current.children[slideNo].style.backgroundColor = " #26f765";
		sideButton.current.children[slideNo].style.color = " white";

		console.log(slideNo, sideButton.current.children[slideNo]);
	};

	return (
		<div>
			<Helmet>
				<title>Industry We Serve</title>
			</Helmet>
			<div ref={sideButton} className='side-button-container'>
				<SideButton
					onClick={() => {
						currentSlide(0);
					}}
					name='Food'
				/>
				<SideButton
					onClick={() => {
						currentSlide(1);
					}}
					name='Health'
				/>
				<SideButton
					onClick={() => {
						currentSlide(2);
					}}
					name='Education'
				/>
				<SideButton
					onClick={() => {
						currentSlide(3);
					}}
					name='Portfolios'
				/>
				<SideButton
					onClick={() => {
						currentSlide(4);
					}}
					name='Tour and Travel'
				/>
			</div>
			<div ref={slides} className='slider-container'>
				<Slider className='h-100 ' background='image/food.jpeg'>
					<header className='h1 text-white'>Food </header>
					<p className=' text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem
						est, molestie eleifend est nec, tempus euismod ipsum. Nunc egestas,
						nunc sit amet pellentesque viverra, magna orci feugiat mi, a
						ultrices metus ligula at nisi. Proin turpis tellus, fermentum nec
						vestibulum nec, finibus in elit. Etiam eget magna ac mi mattis
						rhoncus
					</p>
				</Slider>
				<Slider className='h-100 ' background='image/hospital.jpg'>
					<header className='h1 text-white'>Health </header>
					<p className=' text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem
						est, molestie eleifend est nec, tempus euismod ipsum. Nunc egestas,
						nunc sit amet pellentesque viverra, magna orci feugiat mi, a
						ultrices metus ligula at nisi. Proin turpis tellus, fermentum nec
						vestibulum nec, finibus in elit. Etiam eget magna ac mi mattis
						rhoncus
					</p>
				</Slider>
				<Slider className='h-100' background='image/edu.jpeg'>
					<header className='h1 text-white'>Education </header>
					<p className=' text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem
						est, molestie eleifend est nec, tempus euismod ipsum. Nunc egestas,
						nunc sit amet pellentesque viverra, magna orci feugiat mi, a
						ultrices metus ligula at nisi. Proin turpis tellus, fermentum nec
						vestibulum nec, finibus in elit. Etiam eget magna ac mi mattis
						rhoncus
					</p>
				</Slider>
				<Slider className='h-100' background='image/personal.jpg'>
					<header className='h1 text-white'>Portfolios </header>
					<p className=' text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem
						est, molestie eleifend est nec, tempus euismod ipsum. Nunc egestas,
						nunc sit amet pellentesque viverra, magna orci feugiat mi, a
						ultrices metus ligula at nisi. Proin turpis tellus, fermentum nec
						vestibulum nec, finibus in elit. Etiam eget magna ac mi mattis
						rhoncus
					</p>
				</Slider>
				<Slider className='h-100' background='image/travel.jpg'>
					<header className='h1 text-white'>Tour Travel </header>
					<p className=' text-white w-50'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem
						est, molestie eleifend est nec, tempus euismod ipsum. Nunc egestas,
						nunc sit amet pellentesque viverra, magna orci feugiat mi, a
						ultrices metus ligula at nisi. Proin turpis tellus, fermentum nec
						vestibulum nec, finibus in elit. Etiam eget magna ac mi mattis
						rhoncus
					</p>
				</Slider>
			</div>
		</div>
	);
};

export default Industry;
