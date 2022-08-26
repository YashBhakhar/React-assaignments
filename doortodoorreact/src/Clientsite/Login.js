import React, { useEffect, useState } from 'react';
import { Col, Container, Row, FloatingLabel, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import mystyle from './style.module.css'

function Login(props) {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [users,setUser] = useState("")

    useEffect(()=>{
        const verify = users && users.filter((user)=>{
            return user.email === email
        })
        if(verify){
            if(verify[0].password === password){
                if(verify[0].role_id === 1){
                    localStorage.setItem('admin',JSON.stringify(verify));
                }
                else{
                    localStorage.setItem('user',JSON.stringify(verify))
                    navigate('/')
                }
            }
        }
    })

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/users')
            .then((response) => response.json())
            .then((json) => setUser(json));
    }
    return (
        <div>
            <div>
                <Container className={mystyle.con}>
                    <Row className={mystyle.row1}>
                        <Col sm={6}><h1 className={mystyle.title}>Login</h1></Col>
                    </Row>
                    <Row className={mystyle.row1}>
                        <Col sm={6} className={mystyle.col1}>
                            <div className={` ${mystyle.form} quote-form p-md-5 p-4 mx-auto bg-white mw-100`}>
                                <Form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label className={mystyle.lable}>Email :</label>
                                        <input type="text" className="form-control" id="validationDefault02" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label className={mystyle.lable}>Password :</label>
                                        <input type="password" className="form-control" id="password1" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <button type="submit" className={`${mystyle.btn1} btn submit`}>Login</button>
                                    <br /><br />
                                    <LinkContainer to='/signup'>
                                        <button type="submit" className={`${mystyle.btn1} btn submit`}>Signup</button>
                                    </LinkContainer>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div >
        </div>
    );
}

export default Login;