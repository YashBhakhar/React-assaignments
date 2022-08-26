import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import mystyle from './style.module.css'

function Home(props) {

    return (
        <>
            <Container variant="fluid">
                <Row>
                    <Col sm={12}>
                        <Carousel variant="dark" >
                            <Carousel.Item interval={1000} >
                                <img
                                    className="d-block w-100"
                                    src="https://demo.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/banner1.jpg"
                                />
                                <Carousel.Caption>
                                    <p>Fast and Efficient</p>
                                    <h2>The superior choice for commercial cleaning</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="https://demo.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/banner3.jpg"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <p>Fast and Efficient</p>
                                    <h2>Best home repair services</h2>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="https://demo.w3layouts.com/demos_new/template_demo/20-03-2021/cleanfreshly-liberty-demo_Free/1414300734/web/assets/images/banner2.jpg"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Fast and Efficient</h3>
                                    <p>Any sevice at your door</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <section className={`${mystyle.sec} w3l-bottom-grids-6`}>
                <div class="container">
                    <div class="grids-area-hny main-cont-wthree-fea row">
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="fa fa-bath"></span>
                                <h4><a href="#feature" class="title-head">Best Quality</a></h4>
                                <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box active">
                                <span class="fa fa-cogs active"></span>
                                <h4><a href="#feature" class="title-head">Expert Advice</a></h4>
                                <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 grids-feature">
                            <div class="area-box">
                                <span class="fa fa-users"></span>
                                <h4><a href="#feature" class="title-head">Labour Expertise</a></h4>
                                <p>Fusce rutrum quam a ultrices rhoncus. Nulla eu ipsum tempus est suscipit et vitae nulla.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Container className='mt-5 mb-5 '>
                <Row className={mystyle.h1}><h1>OVER VIEW</h1></Row>
                <Row responsive>
                    <Col sm={12}>
                        <p>HomeService itself defines that it provides you range of services at your doorstep. Our dedicated and experienced team will satisfy the customers by fulfilling their requirements. We deliver our services wherever you want. We are well known for providing all kind of services at very lower cost compared to any other. </p>

                        <p>One can get both online and offline services anywhere at HomeService, our services can be avail at residential or commercial place. We have specialized team of Electricians, Plumbers, Carpenters and others. HomeService is a place where one can forget his worries about all kinds of problems.</p>

                        <p>Many people have needs of services like Pest Control, Indoor and Outdoor Lighting, Plumbing, Home Appliance Repairs etc for which they usually get confuse about where to find these kinds of services. HomeService comes as a solution which saves time in searching for the best services provider in your city, because one can get all services here at one place which will be delivered you at your doorstep.</p>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5 '>
                <center>
                    <Row className={mystyle.bac}><h1 className='mt-3'>Our Services</h1></Row>
                    <Row className={mystyle.fea}>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons-png.flaticon.com/512/62/62931.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Electrical work</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src=' https://cdn-icons.flaticon.com/png/512/2400/premium/2400595.png?token=exp=1660641237~hmac=59d72306abedaa5e35286cae346d5bdd' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Painting work</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border1}>
                                <img src='https://cdn-icons-png.flaticon.com/512/165/165674.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Furniture shifting</a></h4>
                            </Col>
                        </LinkContainer>
                    </Row>
                    <Row className={mystyle.fea}>

                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons.flaticon.com/png/512/5753/premium/5753586.png?token=exp=1660640993~hmac=346ee321365b5f5583d41a3da63528f6' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Washing machine</a></h4>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons.flaticon.com/png/512/3421/premium/3421856.png?token=exp=1660641502~hmac=20dfe68a2c90067b30b80a3bfca5c827' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Modular kitchen</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border1}>
                                <img src='https://cdn-icons.flaticon.com/png/512/2969/premium/2969229.png?token=exp=1660641544~hmac=cabab64353b1e7cb00e9cb167d7bc998' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Refrigerator Service</a></h4>
                            </Col>
                        </LinkContainer>
                    </Row>
                    <Row className={mystyle.fea}>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons-png.flaticon.com/512/3159/3159461.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>TV Repairs</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons-png.flaticon.com/512/3067/3067260.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Computer Repair</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border1}>
                                <img src='https://cdn-icons.flaticon.com/png/512/1055/premium/1055329.png?token=exp=1660641714~hmac=dd2c99380d9dfb1aacc5bdd44b880b64' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Laptop Repairs</a></h4>
                            </Col>
                        </LinkContainer>
                    </Row>
                    <Row className={mystyle.fea}>

                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons-png.flaticon.com/512/15/15874.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Mobile Repair</a></h4>
                            </Col>
                        </LinkContainer>

                        <LinkContainer to="/service">
                            <Col className={mystyle.border}>
                                <img src='https://cdn-icons.flaticon.com/png/512/4571/premium/4571130.png?token=exp=1660641801~hmac=2bb81cd7f010933b4eb1a8a3dce11a5a' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>AC Repairs</a></h4>
                            </Col>
                        </LinkContainer>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border1}>
                                <img src='https://cdn-icons-png.flaticon.com/512/3511/3511016.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Home Theatre Repairs</a></h4>
                            </Col>
                        </LinkContainer>
                    </Row>
                    <Row className={mystyle.fea}>
                        <Col></Col>
                        <LinkContainer to="/service">
                            <Col className={mystyle.border1}>
                                <img src='https://cdn-icons-png.flaticon.com/512/7175/7175171.png' className={mystyle.logo} />
                                <h4><a href="services.html" className={mystyle.text}>Water purifier Repairs</a></h4>
                            </Col>
                        </LinkContainer>
                        <Col></Col>
                    </Row>
                </center>
            </Container>

        </>
    );
}


export default Home;