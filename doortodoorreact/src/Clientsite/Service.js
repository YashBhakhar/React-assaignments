import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import mystyle from './style.module.css'

function Service(props) {
    const [service, setServices] = useState("")
    const u = localStorage.getItem('user')
    const getServices = () => {
        fetch('http://localhost:3001/services')
            .then((response) => response.json())
            .then((json) => setServices(json));
    }
    useEffect(() => {
        getServices()
    }, [])
    return (
        <div>
            <Container className='mt-1' variant="fluid">
                <Row>
                    <img src='https://www.atozservice.in/images/nearme/slide1.jpg' className={mystyle.img} />
                </Row>
                <Row className={`${mystyle.row} mt-2 mb-5`}>
                    <Col sm={12} className={mystyle.sel}>
                        <i className={`${mystyle.icon} fa-solid fa-angles-right`}></i>
                        Select Your Desiered Service
                        <i className={`${mystyle.icon} fa-solid fa-angles-left`}></i>
                    </Col >
                    {
                        service && service.map((s) => {
                            return <LinkContainer to={u?`/service/${s.id}`:`/login`}>
                                <Col sm={12} className={mystyle.col}>
                                    <i className={`${mystyle.icon2} fa-regular fa-star`}></i>
                                    <a className={mystyle.btn}>{s.name}</a>
                                    <i className={`${mystyle.icon3} fa-solid fa-angles-right`}></i>
                                </Col>
                            </LinkContainer>
                        })}
                </Row>
            </Container>
        </div>

    );
}

export default Service;