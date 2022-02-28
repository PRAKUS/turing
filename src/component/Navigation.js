import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import RequestQuote from "./RequestQuote";

const Navigation = () => {
	const [position, handleposition] = useState("");

	return (
		<div className='bg-light'>
			<Navbar
				className=''
				fixed={position}
				collapseOnSelect
				expand='lg'
				bg='light'
				variant='light'>
				{window.addEventListener("scroll", () => {
					let scroll = window.scrollY;
					if (scroll > 800 && window.innerWidth > 1200) {
						handleposition("top");
					} else if (scroll > 400 && window.innerWidth < 576) {
						handleposition("top");
					} else if (
						scroll > 800 &&
						window.innerWidth > 576 &&
						window.innerWidth < 1199
					) {
						handleposition("top");
					} else {
						handleposition("");
					}
				})}

				<Navbar.Brand>
					<Link to='home'>
						<img src='logo.png' height='40px' alt='company logo' />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='border-left border-dark pl-2'>
						<Link className='nav-link text-primary' to='/'>
							Home
						</Link>

						<Link className='nav-link text-primary' to='about'>
							About
						</Link>

						<Link className='nav-link text-primary' to='services'>
							Services
						</Link>

						<Link
							className='nav-link text-primary'
							style={{ zIndex: "20" }}
							to='industry'>
							Industries we serve
						</Link>

						<Link className='nav-link text-primary' to='blogs'>
							Blogs
						</Link>
					</Nav>
					<Nav className='ml-auto pl-3 pt-2'>
						<RequestQuote className='bg-transparent text-dark border-dark' />
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navigation;
