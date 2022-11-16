import "./forum.css"
import Menu from "../menu/menu"
import Post from "./post"

function sum2arrays(first,second){
    const ret=[]
    for (const i of first){
        ret.push(i)
    }
    for(const i of second){
        ret.push(i)
    }
    return ret
}

export default async function Forum(){

    const forum=await (await fetch('/forum.json')).json()
 

    const getname=()=>{
        const ret=document.getElementById('username').value
        if(ret){
            return ret
        }else{
            return "someone random"
        } 
    }



    const fun=async (forums)=>{

        const ret=[]

        for(const forum of forums){

            const comments=await fun(forum.comments)
            ret.push( 
                Post(forum.content,forum.author,forum.hash,comments, (content)=>{ 
                fetch('/post',{
                    method:"POST",
                    body:JSON.stringify({hash:forum.hash,content:content,author:getname()})
                }).then(()=>{
                    window.location.href = window.location.href  
                }) 
                    }) 
            
            )
                
        }

        return ret

    }


    
    return <> 

    <div className={"username"}>
    <label>username: </label>
   <input id="username" type={"text"} placeholder={`someone random`} ></input>
   </div>
 

    <Menu></Menu>
   <div className="main">  
    
    <div className="createthread"> 
    <input className="maintextarea" placeholder="Start new thead" onKeyDown={ (ev)=>{
        if(ev.key=='Enter'){
            const message=ev.target.value
             fetch('/post',{
                method:"POST",
                body:JSON.stringify({hash:"",content:message,author:getname()})
            }).then(()=>{
                window.location.href = window.location.href 
            })
            ev.target.value="" 

        }
    }}></input>
    </div>

    {
       await fun(forum)
    } 
 
 
   </div>
    </>
}
