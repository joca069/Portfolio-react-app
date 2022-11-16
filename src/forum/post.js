import "./post.css"
import { generateID } from "./generate"

export default function Post(content,autor,id,commentsarray,onComment){

    if(!id){
        id='id_'+generateID()
    }

    const buttoncommentID='id_'+generateID()
    const buttoncommentsID='id_'+generateID()
    const commentID='id_'+generateID()
    const commentsID='id_'+generateID()
    const l=[]
    let collapsecomment=true
    let collapsecomments=true

    setTimeout(() => {
        
        const comment=document.getElementById(commentID)
        const comments=document.getElementById(commentsID)
 
        //to load comments
        document.getElementById(buttoncommentsID).onmousedown=(ev)=>{ 
           if(collapsecomments){
            comments.style.height="max-content"
           }else{
            comments.style.height="0px"
            } 
            collapsecomments=!collapsecomments
    
        }
    
        //for client to make comment
        document.getElementById(buttoncommentID).onmousedown=(ev)=>{ 
            if(collapsecomment){
                comment.style.height="max-content"
               }else{
                comment.style.height="0px"
                } 
                collapsecomment=!collapsecomment
        }    


    }, 100);

return <div className="post" id={id}>
<div className="post-content">
{content}
</div>
<div className="post-author">{autor}</div>
 

<div className="post-bottom"><div className="post-button" id={buttoncommentID}>{commentsarray.length}</div>
<div id={buttoncommentsID} className="post-button"></div>
</div>
<div id={commentID} className="post-comment" ><input type={"text"} onKeyDown={(ev)=>{
    if(ev.key=='Enter'){
        //post comment
        onComment(ev.target.value)
        ev.target.value="" 
    }

}}></input></div>
<div id={commentsID} className="post-comments">{commentsarray}</div>


</div>
}