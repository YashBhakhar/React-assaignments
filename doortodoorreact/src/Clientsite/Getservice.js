import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import mystyle from './style.module.css'

function Getservice(props) {

    const navigate = useNavigate()

    const { id } = useParams()
    const u = localStorage.getItem('user')
    const u2 = JSON.parse(u)

    const [service, setService] = useState()

    const [name, setName] = useState(u2[0].name)
    const [date, setDate] = useState("")
    const [email, setEmail] = useState(u2[0].email)
    const [phone, setPhone] = useState(u2[0].phone)
    const [address, setAddress] = useState(u2[0].address)
    const [comment, setCommnet] = useState()
    const status = "Pending"

    const handleService = (e) => {
        e.preventDefault()
        const role_id = 2
        const service1 = service.name
        const data = { name, email, service1, date, phone, address, comment, status }

        fetch(' http://localhost:3001/reapairs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        navigate('/myservice')
    }

    useEffect(() => {
        fetch(`http://localhost:3001/services/${id}`)
            .then((response) => response.json())
            .then((json) => {
                setService(json)
            })
    }, [])

    return (

        <div>
            {service ? <>
                <Container className={mystyle.con}>
                    <Row className={mystyle.row1}>
                        <Col sm={6}><h1 className={mystyle.title}>Make Service</h1></Col>
                    </Row>
                    <Row className={mystyle.row1}>
                        <Col sm={6} className={mystyle.col1}>
                            <div className={` ${mystyle.form} quote-form p-md-5 p-4 mx-auto bg-white mw-100`}>
                                <Form onSubmit={handleService}>
                                    <div className="form-group">
                                        <label className={mystyle.lable}>Full name :</label>
                                        <input type="text" className="form-control" value={name} id="validationDefault01" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className={mystyle.lable}>Email :</label>
                                        <input type="text" className="form-control" value={email} id="validationDefault02" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label className={mystyle.lable}>Service : </label>
                                        <input type="text" className="form-control" id="klas" value={service.name} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className={mystyle.lable}>Date : </label>
                                        <input type="date" className="form-control" id="klas2" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className={mystyle.lable}>Phone :</label>
                                        <input type="text" className="form-control" value={phone} id="password1" placeholder="Enter Your Phone" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="form-group ">
                                        <label className={mystyle.lable}>Address :</label>
                                        <FloatingLabel controlId="floatingTextarea2" className={mystyle.formf}>
                                            <Form.Control
                                                as="textarea"
                                                value={address}
                                                placeholder="Your Address"
                                                style={{ height: '100px' }}
                                                onChange={(e) => setAddress(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className={mystyle.lable}>Comment :</label>
                                        <Form.Control as="textarea" placeholder="Leave a comment here" onChange={(e) => setCommnet(e.target.value)} />
                                    </div>
                                    <button type="submit" className={`${mystyle.btn1} btn submit`}>Make Service</button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </> : <></>
            }
        </div >
    );
}

export default Getservice;