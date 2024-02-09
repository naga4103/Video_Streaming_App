
import { ChangeEvent, FormEvent, useState } from 'react';
import { Button,Card,Form,Container,Row,Col} from 'react-bootstrap';
import CommentItem from '../CommentItem/CommentItem';

//import {v4 as uuidv4} from 'uuid';




const Comment=()=>{



    

 const [name,setName]=useState<string>("");

    const [commentText,setCommentText]=useState<string>('');


  //  const [comment,setComment]=useState({name:'',commentText:''})

  const [commentsList,setCommentsList]=useState<{name:string,commentText:string}[]>([]);

   // const commentDetails={name,commentText}


const onChangeName=(Event:ChangeEvent<HTMLInputElement>)=>{

    setName(Event.target.value);
    console.log(Event.target.value);

}


const onChangeComment=(Event:ChangeEvent<HTMLInputElement>)=>{
    
    setCommentText(Event.target.value);
    console.log(Event.target.value);

}


const onSubmitForm=(Event:FormEvent<HTMLFormElement>)=>{
    Event.preventDefault();
   // setComment({name,commentText})
    setName('');
    setCommentText('');
         
   const newComment={
     name,
        commentText
    }

setCommentsList((prev:{ name:string, commentText:string}[])=>[...prev,newComment]);



    console.log("Submit button clicked");
}
    return(


<div>
<pre>{JSON.stringify(name)}</pre>
<pre>{JSON.stringify(commentText)}</pre>
<Container >
    <Row>
        <Col xs={12}>
        <Card>
            <Card.Header>
                Comments
            </Card.Header>
            <Card.Body>
                <Form onSubmit={onSubmitForm}>
                    <Form.Group className='mb-3'> 
                        <Form.Control type='text' placeholder='Your Name' value={name} onChange={onChangeName}></Form.Control>
                        
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control as='textarea' rows={5} placeholder='Enter your Comment' onChange={onChangeComment} value={commentText}></Form.Control>

                    </Form.Group>

                    <Button type='submit' className='primary' >Submit</Button>
                </Form>

                
            </Card.Body>
        </Card>
        </Col>

     <Col xs={12}>

        <>
        
        <hr/>
     {commentsList.map((eachComment)=>{

        return(

            <CommentItem commentDetails={eachComment} key={eachComment.name}/>

        )




     })}
        </>
     
     </Col>   

        
    </Row>
    
</Container>









{/* <Container>
<Form className='mb-3'> 
<Row>
    <Col>
    <Form.Group controlId='formEmail'>
    <Form.Label>Email Address</Form.Label>
    <Form.Control type='email' placeholder='example@gmail.com'></Form.Control>
    <Form.Text className='text-muted'>We will never share your email address, trust us!</Form.Text>
</Form.Group>
</Col>
<Col>
<Form.Group>
    <Form.Label>Password</Form.Label>
    <Form.Control type='password' placeholder='Enter Password'></Form.Control>
    
</Form.Group>
    
    </Col>


</Row>

    </Form>
<Card className='mb-3' >
    <Card.Img src='https://picsum.photos/200/100'
    ></Card.Img>
    <Card.Body>
        <Card.Title>Card Example</Card.Title>
        <Card.Text>This is the example of card</Card.Text>
        <Button variant='primary' type='submit'>Login</Button>
    </Card.Body>
</Card>

    <Alert variant='primary'>This is a Alert</Alert>
    <Button>This is Button</Button>
    <Breadcrumb>
    <Breadcrumb.Item>Link1</Breadcrumb.Item>
    <Breadcrumb.Item>Link2</Breadcrumb.Item>
    <Breadcrumb.Item active>Link3</Breadcrumb.Item>
    </Breadcrumb>

    <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link" className='mb-3'>Link</Button>



    </Container> */}
   
</div>
    );
}

export default Comment