import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import mystyle from './style.module.css'

function Signup(props) {
    const navigate = useNavigate()
    const u = JSON.parse(localStorage.getItem('user'))

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [edit, setEdit] = useState(false)
    const [address, setAddress] = useState("")

    useEffect(() => {
        if (u) {
            setName(u[0].name)
            setEmail(u[0].email)
            setPassword(u[0].password)
            setPhone(u[0].phone)
            setAddress(u[0].address)
            setEdit(true)
        }
    }, [])

    const handleupdate = (e) => {
        e.preventDefault()
        const role_id = 2
        const data = { name, email, password, phone, address, role_id }
        console.log(data)

        fetch(`http://localhost:3001/users/${u[0].id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
            navigate('/login')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const role_id = 2
        const data = { name, email, password, phone, address, role_id }

        fetch(' http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        navigate('/login')
    }



    return (
        <div>
            <Container className={mystyle.con}>
                <Row className={mystyle.row1}>
                    <Col sm={6}><h1 className={mystyle.title}>Signup</h1></Col>
                </Row>
                <Row className={mystyle.row1}>
                    <Col sm={6} className={mystyle.col1}>
                        <div className={` ${mystyle.form} quote-form p-md-5 p-4 mx-auto bg-white mw-100`}>
                            <Form onSubmit={edit ? handleupdate : handleSubmit}>
                                <div className="form-group">
                                    <label className={mystyle.lable}>Full name :</label>
                                    <input type="text" value={name} className="form-control" id="validationDefault01" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className={mystyle.lable}>Email :</label>
                                    <input type="email" value={email} className="form-control" id="validationDefault02" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className={mystyle.lable}>Password :</label>
                                    <input type="text" value={password} className="form-control" id="validationDefault01" placeholder="Enter Your password" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group mb-4">
                                    <label className={mystyle.lable}>Phone :</label>
                                    <input type="text" value={phone} className="form-control" id="password1" placeholder="Enter Your Phone" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="form-group ">
                                    <label className={mystyle.lable}>Address :</label>
                                    <FloatingLabel controlId="floatingTextarea2" className={mystyle.formf}>
                                        <Form.Control
                                            as="textarea"
                                            value={address}
                                            placeholder="Your Address"
                                            style={{ height: '100px' }}
                                            onChange={(e) => setAddress(e.target.value)} />
                                    </FloatingLabel>
                                </div>
                                <button type="submit" className={`${mystyle.btn1} btn submit`}>{edit?'Update Profile':'Signup'}</button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Signup;