import React,{FormEvent, useState} from "react";
import {Card,Container,Row,Col, Form, Button} from 'react-bootstrap';


const Register=()=>{

    const [users,userState]=useState({
        user:{
            usename:"",
            email:"",
            password:""
        }
        
    });

    const onUserNameChange=(Event:FormEvent)=>{


    }

const onSubmitForm=(Event:FormEvent)=>{
    Event.preventDefault();
}

    return(
        <>
        <Container  className="mt-3">
            <Row>
                <Col xs={4}>
                <Card className="shadow-lg">
                    <Card.Header className="bg-primary text-white">
                        <h3>Register</h3>
                        
                        </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="User Name" onChange={onUserNameChange}></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3"> 
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Pasword"></Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                
                                <Button type="submit" variant="primary" onClick={onSubmitForm}>Submit</Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>

                </Col>
            </Row>
        </Container>
        
        </>
    )

}

export default Register;