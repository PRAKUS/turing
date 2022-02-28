import React from "react";
import { Col, Form, Row, Card, Accordion } from "react-bootstrap";
import { BsSearch, BsQuestionCircleFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

const QuestionContainer = (props) => {
	return (
		<Accordion className='mt-2'>
			<Card>
				<Accordion.Toggle
					className=' border-0 bg-white  '
					as={Card.Header}
					variant='link'
					eventKey='0'>
					<BsQuestionCircleFill />
					<label className='ml-2'>{props.question}</label>
				</Accordion.Toggle>

				<Accordion.Collapse eventKey='0'>
					<Card.Body>{props.answer}</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

const FAQ = () => {
	return (
		<div>
			<Helmet>
				<title>FAQs</title>
			</Helmet>
			<section className='faq-banner bg-primary d-flex flex-column align-items-center justify-content-center '>
				<header className='h1 text-white'>Help Center</header>
				<p className='text-white'>We are here for yor assitance</p>
				<Form className='container '>
					<Form.Group className='bg-white d-flex rounded overflow-hide'>
						<Form.Control
							className='border-0'
							type='text'
							placeholder='how can we  help you?'
						/>
						<button className='btn border rounded-0 border-0'>
							<BsSearch />
						</button>
					</Form.Group>
				</Form>
			</section>
			<section className='container m-space'>
				<header className='text-primary h2'>FAQs</header>
				<Row>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>Web </p>
							<p className='border-bottom w-100 pl-1'>Devlopment</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>Web </p>
							<p className='border-bottom w-100 pl-1'>Design</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>Web </p>
							<p className='border-bottom w-100 pl-1'>Maintianance</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>Web </p>
							<p className='border-bottom w-100 pl-1'>Redesign</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>Digital </p>
							<p className='border-bottom w-100 pl-1'>Marketing</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
					<Col xs={12} sm={12} md={6} lg={6} xl={6} className='p-4'>
						<header className='  d-flex w-100'>
							<p className='border-bottom border-primary  '>General </p>
							<p className='border-bottom w-100 pl-1'>Questions</p>
						</header>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
						<QuestionContainer
							question='whats is your question?'
							answer='and here is your answer'
						/>
					</Col>
				</Row>
			</section>
		</div>
	);
};

export default FAQ;
