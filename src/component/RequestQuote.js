import axios from "axios";
import React, { useRef, useState } from "react";
import { Form, Modal, Col, Button, Toast } from "react-bootstrap";

function Popup(props) {
	const url = "http://localhost:1337/buyer-requests";
	const [inputs, inputHandler] = useState({
		FirstName: "",
		LastName: "",
		Email: "",
		PhoneNumber: "",
		skypeId: "",
		Service: "Select ",
		country: "",
		city: "",
		state: "",
	});
	const from = useRef(null);

	const [showA, setShowA] = useState(false);
	const handleChange = (event) => {
		event.persist();
		inputHandler((inputs) => ({
			...inputs,
			[event.target.name]: event.target.value,
		}));
	};
	const toggleShow = () => setShowA(!showA);
	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post(url, inputs);
		inputHandler({
			FirstName: "",
			LastName: "",
			Email: "",
			PhoneNumber: "",
			skypeId: "",
			Service: "Select ",
			country: "",
			city: "",
			state: "",
		});
		props.onHide();
		toggleShow();
	};

	return (
		<div>
			<Toast
				style={{
					position: "absolute",
					width: "100%",
					left: "40%",
					marginTop: "15%",
					zIndex: 999,
				}}
				show={showA}
				onClose={toggleShow}>
				<Toast.Header>
					<strong className='mr-auto'>Thank You</strong>
				</Toast.Header>
				<Toast.Body>
					Your request has be accepted we will contact you soon.
				</Toast.Body>
			</Toast>
			<Modal {...props} size='lg' backdrop='static' centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Request Quote
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form ref={from} onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} controlId='FirstName'>
								<Form.Label>First Name</Form.Label>
								<Form.Control
									type='text'
									name='FirstName'
									placeholder='Name'
									onChange={handleChange}
									value={inputs.FirstName}
									required
								/>
							</Form.Group>
							<Form.Group as={Col} controlId='LastName'>
								<Form.Label>Last Name</Form.Label>
								<Form.Control
									type='text'
									name='LastName'
									placeholder='Name'
									onChange={handleChange}
									value={inputs.LastName}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='Email'>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									name='Email'
									placeholder='Enter email'
									required
									onChange={handleChange}
									value={inputs.Email}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId='PhoneNumber'>
								<Form.Label>Phone Number</Form.Label>
								<Form.Control
									type='number'
									name='PhoneNumber'
									placeholder='9876543210'
									onChange={handleChange}
									value={inputs.PhoneNumber}
									required
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='SkypeId'>
								<Form.Label>SkypeId/Zoom Id</Form.Label>
								<Form.Control
									type='text'
									name='skypeId'
									placeholder=''
									onChange={handleChange}
									value={inputs.skypeId}
								/>
							</Form.Group>
						</Form.Row>
						<Form.Row>
							<Form.Group as={Col} controlId='service'>
								<Form.Label>Select Our Service</Form.Label>
								<Form.Control
									as='select'
									name='Service'
									value={inputs.Service}
									onChange={handleChange}>
									<option value='webdevelopment'>Web Development</option>
									<option value='webdesign'>Web Design</option>
									<option value='webredesign'>Web Redesign</option>
									<option value='webmaintianance'>Web Mantian</option>
									<option value='digitalmarketing'>Digital Marketing</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Group controlId='Country'>
							<Form.Label>Country</Form.Label>
							<Form.Control
								typr='text'
								name='country'
								placeholder='India'
								onChange={handleChange}
								value={inputs.country}
							/>
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId='City'>
								<Form.Label>City</Form.Label>
								<Form.Control
									type='text'
									name='city'
									onChange={handleChange}
									value={inputs.city}
								/>
							</Form.Group>

							<Form.Group as={Col} controlId='State'>
								<Form.Label>State</Form.Label>
								<Form.Control
									type='text'
									name='state'
									onChange={handleChange}
									value={inputs.state}
								/>
							</Form.Group>
						</Form.Row>

						<Button variant='primary' type='submit'>
							Request Quote
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

const RequestQuote = (props) => {
	const [modalShow, setModalShow] = useState(false);
	return (
		<div>
			<Popup
				show={modalShow}
				onHide={() => {
					setModalShow(false);
				}}
			/>
			<Button className={props.className} onClick={() => setModalShow(true)}>
				Request Quote
			</Button>
		</div>
	);
};
export default RequestQuote;
