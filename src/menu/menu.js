import "./menu.css"


function tags(){

   fetch('/menu.json').then(async(res)=>{
    const tags=await res.json()
    for( const tag of tags){
        const div=document.createElement('dev')
        div.className="menu-tag"
        div.innerHTML=`<a href="${tag.link}">${tag.content}</a><br>`
        document.getElementsByClassName('menu')[0].appendChild(div)
    }
   })

}

export default function Menu(){
return <div className="menu">
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
<div className="menu-icon"></div> 
{
   tags()
}
</div> 

}
