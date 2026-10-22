import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import bookCollection from '../../asset/images/bookcollection.jpeg'; 
import axios from 'axios';
import APICALL from '../../api/APICALL';

class HistoriesBook extends Component {
    constructor() {
        super();
        this.state = {
            sdid: '',
            stname: '',
            stemail: '',
            sphone: '',
            selectedDate: null,
            bookingConfirmed: false
        };
    }

    onchangename = (event) => {
        let stname = event.target.value;
        this.setState({ stname: stname });
    };

    onchangeemail = (event) => {
        let stemail = event.target.value;
        this.setState({ stemail: stemail });
    };

    onchangephone = (event) => {
        let sphone = event.target.value;
        this.setState({ sphone: sphone });
    };

    onchangecountry = (event) => {
        let sdid = event.target.value;
        this.setState({ sdid: sdid });
    };

    onDateChange = (date) => {
        this.setState({ selectedDate: date });
    };

    onformsubmit = (event) => {
        const { stname, stemail, sphone, sdid, selectedDate } = this.state;

        const bookingData = {
            sdid,
            stname,
            stemail,
            sphone,
            selectedDate
        };

        axios
            .post(APICALL.BookingConfirm, bookingData)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ bookingConfirmed: true });
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        return (
            <Fragment >
                <Container>
                    <Row>
                        <Col md={12}>
                        {/* <div className="image-container">
                            <Image src={bookCollection} alt="Book Image" className="book-image" fluid />
                        </div> */}
                       <h2>Jeremy Hutchinson’s Case Histories</h2>
                        <p style={{ textAlign: 'justify' }}>
                        Jeremy Hutchinson’s Case Histories is a captivating book by Thomas Grant that delves into the fascinating legal career of renowned barrister Jeremy Hutchinson. Through a collection of gripping case studies, Grant explores Hutchinson's remarkable courtroom battles and the impact they had on shaping the legal landscape of the time. Readers will be captivated by the intricacies of each case, the legal strategies employed, and the profound social and cultural implications they carried. Join Thomas Grant on a journey through Jeremy Hutchinson’s extraordinary case histories, providing insights into the legal profession and the pursuit of justice.
                        </p>
                    </Col>
                    </Row>

                    <div>
                    <Row>
                        <Col md={8}>
                        {/* Course Details */}
                        <Row>
                            <Col md={10}>
                            <h3>Course Details - Jeremy Hutchinson’s Case Histories</h3>
                            <ul>
                                <li>Introduction to Jeremy Hutchinson’s Case Histories</li>
                                <li>Exploring Hutchinson's Remarkable Courtroom Battles</li>
                                <li>Understanding the Legal Strategies Employed by Hutchinson</li>
                                <li>Examining the Social and Cultural Implications of Hutchinson's Cases</li>
                                <li>Analyzing Landmark Cases and Their Legal Significance</li>
                                <li>Ethics and Professionalism in the Legal Profession</li>
                                <li>Impact of Hutchinson's Cases on Legal Precedents</li>
                                <li>Reflections on Justice, Equality, and the Rule of Law</li>
                            </ul>

                            <h3>Reserving a Book:</h3>
                            <ul>
                                <li>Reservation can be made up to 2 weeks in advance.</li>
                                <li>Each student can reserve a maximum of 2 books at a time.</li>
                                <li>Reserved books should be collected within 2 days of the reserved date.</li>
                                <li>Failure to collect the reserved book within the specified time may result in cancellation.</li>
                            </ul>

                            <h3>Returning a Book:</h3>
                            <ul>
                                <li>The maximum loan period is 2 weeks.</li>
                                <li>Books must be returned on or before the due date to avoid late charges.</li>
                                <li>Late charges for overdue books are RS.200 per day.</li>
                            </ul>
                            </Col>
                        </Row>
                        </Col>
                            
                            
                                
                           

                            {/* User Inquiries */}
                            <Col md={4}>
                                <Card>
                                    <Card.Header as="h5">Reserve the Book</Card.Header>
                                    {this.state.bookingConfirmed && <Alert variant="success">Booking Confirmed</Alert>}
                                    <Card.Body>

                                        <Form>
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Student ID <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangename}
                                                    type="text"
                                                    placeholder="Enter your student ID"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Student Name <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangeemail}
                                                    type="email"
                                                    placeholder="Enter your name"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangephone}
                                                    type="text"
                                                    placeholder="Enter your email address"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="country">
                                                <Form.Label>Mobile Number <span className="text-danger">*</span></Form.Label>
                                                <Form.Control
                                                    onChange={this.onchangecountry}
                                                    type="text"
                                                    placeholder="Enter your number"
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="date">
                                                <Form.Label>Select Date <span className="text-danger">*</span></Form.Label>
                                                <br />
                                                <DatePicker
                                                    selected={this.state.selectedDate}
                                                    onChange={this.onDateChange}
                                                    minDate={new Date()}
                                                    placeholderText="Select the reservation date"
                                                    className="form-control"
                                                    required
                                                />
                                            </Form.Group>

                                            <Button variant="primary" onClick={this.onformsubmit}>Submit</Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <br />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default HistoriesBook;
