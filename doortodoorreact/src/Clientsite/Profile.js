import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import mystyle from './style.module.css'

function Profile(props) {

    const u = JSON.parse(localStorage.getItem('user'))

    return (
        <div>
            <Container className='mt-4 mb-4'>
                <Row className={mystyle.row2}>
                    <Col sm={4}>
                        <Card className={mystyle.card}>
                            <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.uU9sZ2kkDAKklGgzWpR_jgHaHa&pid=Api&P=0"  style={{ padding: '1rem' }}/>
                            <Card.Body className={mystyle.cbody}>
                                <Card.Title>Name : {u[0].name}</Card.Title>
                                <Card.Text>Email : {u[0].email}</Card.Text>
                                <Card.Text>Phone : {u[0].phone}</Card.Text>
                                <Card.Text>Address : {u[0].address}</Card.Text>
                                <LinkContainer to={`/edit/${u[0].id}`}>
                                <Button variant="primary" className={mystyle.btn2}>Edit Profile</Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Profile;