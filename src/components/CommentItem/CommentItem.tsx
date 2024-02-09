
import {  Card} from "react-bootstrap"

import './CommentItem.css'

interface CommentItemProps{
    
   commentDetails:{     name:string;
        commentText:string;
   }
    

}



const CommentItem:React.FC<CommentItemProps>=(props)=>{

    const {commentDetails}=props
    


    return(
        
<>



    
<Card border="light">
<Card.Body className="d-flex flex-row  ">
    <Card.Text className=" align-self-center bg-primary text-light  first-letter-css">R</Card.Text>
    <div className="d-flex flex-column p-3">
        <Card.Title>{commentDetails.name}</Card.Title>
        <Card.Text>{commentDetails.commentText}</Card.Text>

    </div>

</Card.Body>

</Card>

    




</>
            
            
                   
                    
         

        
    )

}

export default CommentItem