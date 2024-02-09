import React, { FormEvent } from 'react';
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';

const NewTodo:React.FC=()=>{

const onSubmitForm=(Event:React.FormEvent)=>{
    Event.preventDefault();

}

    return(<>
    <Container className='mt-3'>
        <Row>
            <Col>
            <Form onSubmit={onSubmitForm}>
                <Form.Group className='mb-3'>
                <Form.Label htmlFor='todo-text'>Todo Text</Form.Label>
<Form.Control type='text' placeholder='Enter Todo' className='mb-3'></Form.Control>
<Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
            </Col>
        </Row>
    </Container>
    </>);
}

export default NewTodo;