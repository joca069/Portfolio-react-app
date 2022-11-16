import "./projects.css"

 

export default function Project(title,description){

    return (
        <>
        <div className="project">
        <div className="project-title">{title}</div>
        <div className="project-description">{description}</div>
        </div>
        </>
    )
}