import "./projects.css"
import Menu from "../menu/menu"
import Project from "./project"


export default async function Projects(){
    const projects=await (await fetch('/projects.json')).json()
    
    let ret=[]

    for(const i of projects){
        ret.push(Project(i.name,<>{i.description}<a href={i.link}>Link</a></>))
    }
    
    return (
        <>
        <Menu></Menu>
        <div className="Main">

            {
                ret
            } 

        </div>
        </>
    )
}