import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mystyle from './style.module.css'

function About(props) {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} className={mystyle.mtb2}>
                        <div className="title-content text-left">
                            <h6 className="sub-title">Welcome to our CleanFreshly</h6>
                            <h3 className="hny-title">About Our Company</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
                            tenetur
                            consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                            voluptatem tenetur
                            consequatur adipisicing elit.</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                            voluptatem tenetur
                            consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                            voluptatem tenetur
                            consequatur adipisicing elit.</p>
                    </Col>
                    <Col sm={6} className={mystyle.mtb}>
                        <img src="assets/images/ab2.jpg" className="img-fluid" alt />
                    </Col>
                    <Col sm={6} className={mystyle.mtb}>
                        <img src="assets/images/ab3.jpg" className="img-fluid" alt />
                    </Col>
                    <Col sm={6} className={mystyle.mtb2}>
                        <div className="title-content text-left mt-5">
                            <h6 className="sub-title">Simple Text</h6>
                            <h3 className="hny-title">Why Choose Us</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
                            tenetur
                            consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                            voluptatem tenetur
                            consequatur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio voluptatem
                            tenetur
                            consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic odio
                            voluptatem tenetur
                            consequatur adipisicing elit.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;