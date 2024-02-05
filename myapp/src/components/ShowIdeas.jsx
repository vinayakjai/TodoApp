import Idea from "./Idea";

function ShowIdeas(props){
    
  
    return (
        <>
        {
        props.ideas.map((idea)=>{
         
            return (

               
                    
                   <Idea key={idea.id} idea={idea.content} delete={()=>props.delete(idea.id)} />
                   
              
            )
        } )
        }
        </>
    )
}

export default ShowIdeas;