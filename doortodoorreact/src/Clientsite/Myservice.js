import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import mystyle from './style.module.css'

function Myservice(props) {

    const [repairs, setRepairs] = useState([])



    useEffect(() => {
        getRepairs()
    }, [repairs])

    const getRepairs = () => {
        fetch('http://localhost:3001/reapairs')
            .then((response) => response.json())
            .then((json) => setRepairs(json));
    }

    repairs && repairs.map((r) => {
        console.log(r)
    })

    return (
        <div>
            <Container className='mt-4 mb-4'>
                <Row className={mystyle.row3}>
                    <Col sm={12} className={mystyle.col4}>
                        <h1 style={{color:'#F45D01'}}>My Services</h1>
                    </Col>
                    <Col sm={2} className={mystyle.col2}>ID</Col>
                    <Col sm={2} className={mystyle.col2}>Service Name</Col>
                    <Col sm={2} className={mystyle.col2}>Phone</Col>
                    <Col sm={2} className={mystyle.col2}>Date</Col>
                    <Col sm={2} className={mystyle.col2}>Address</Col>
                    <Col sm={2} className={mystyle.col3}>Status</Col>
                    {
                        repairs && repairs.map((r) =>
                            <Container fluid>
                                <Row>
                                    <Col sm={2} className={mystyle.col2}>{r.id}</Col>
                                    <Col sm={2} className={mystyle.col2}>{r.service1}</Col>
                                    <Col sm={2} className={mystyle.col2}>{r.phone}</Col>
                                    <Col sm={2} className={mystyle.col2}>{r.date}</Col>
                                    <Col sm={2} className={mystyle.col2}>{r.address}</Col>
                                    <Col sm={2} className={mystyle.col3}>{r.status}</Col>
                                </Row>
                            </Container>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Myservice;