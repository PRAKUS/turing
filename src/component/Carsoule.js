import React, { useEffect, useRef, useState } from "react";
import { Swipeable } from "react-touch";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";

const Carsoule = (props) => {
	const slides = useRef(null);
	const viewport = useRef(null);
	const [childerWidth, getChildrenWidth] = useState(0);
	const [noOfChild, getNoOfChild] = useState(0);
	const [parentWidth, getParentWidth] = useState(0);
	let control = props.control;
	useEffect(() => {
		try {
			let childerWidth = slides.current.children[0].offsetWidth;
			let parentWidth = viewport.current.offsetWidth;
			let noOfChild = slides.current.children.length;
			getChildrenWidth(childerWidth);
			getParentWidth(parentWidth);
			getNoOfChild(noOfChild);
		} catch (err) {
			console.log(err);
		}
	}, []);

	const [currentSlide, changeSlide] = useState(0);

	const next = () => {
		if (
			currentSlide <=
			slides.current.children.length -
				parseInt(window.screen.width / childerWidth)
		) {
			let newSlide = currentSlide + 1;
			changeSlide(newSlide);

			slides.current.style.transitionDuration = "0.5s";
			slides.current.style.transform = `translate(-${
				childerWidth * newSlide
			}px)`;
		}
	};
	const prev = () => {
		if (currentSlide) {
			let newSlide = currentSlide - 1;
			changeSlide(newSlide);
			slides.current.style.transitionDuration = "0.5s";
			slides.current.style.transform = `translate(-${
				childerWidth * newSlide
			}px)`;
		}
	};

	const button = () => {
		if (control === true || control === undefined) {
			if (parentWidth < childerWidth * noOfChild) {
				return (
					<div>
						<BiChevronLeftCircle
							style={{ ...style.left, ...style.button }}
							onClick={prev}
						/>

						<BiChevronRightCircle
							style={{ ...style.right, ...style.button }}
							onClick={next}
						/>
					</div>
				);
			}
		} else {
		}
	};

	return (
		<Swipeable onSwipeLeft={next} onSwipeRight={prev}>
			<div
				ref={viewport}
				className={props.className}
				style={{ ...style.container, ...props.style }}>
				{button()}

				<div ref={slides} style={style.content}>
					{props.children}
				</div>
			</div>
		</Swipeable>
	);
};

const style = {
	container: {
		display: "flex",
		flexDirection: "row",
		width: "80%",
		margin: "auto 10%",
		overflow: "hidden",
		position: "relative",
	},
	content: {
		display: "flex",
	},
	button: {
		top: "45%",
		zIndex: "9",
		height: "40px",
		width: "40px",
	},

	left: {
		position: "absolute",
		left: "20px",
	},
	right: {
		position: "absolute",
		right: "20px",
	},
};
export default Carsoule;
