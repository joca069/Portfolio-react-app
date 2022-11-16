import Menu from "../menu/menu"
import "./aboutMe.css"



function loadOnScroll(){
	const observe=new IntersectionObserver(es=>{
          es.forEach(e=>{
		  if(e.isIntersecting){
		  e.target.classList.add('show')
		  }else{            
		  e.target.classList.remove('show')
		  }
	  })
	})
	const hid=document.getElementsByClassName('hidden')
      
    
    for(const i of hid){
        observe.observe(i)
    }

}
 

export default async function AboutMe(){

    const info=await(await fetch('/aboutme.json')).json()


     setTimeout(loadOnScroll,100)
  return(
    <>
    <Menu></Menu>
    <div className="main"> 
    <img src={info.picture} className="mine-picture"></img>
    <h1 className="hidden">My name is {info.name}</h1> 
    <div className="hidden">My github:<a href={info.github}>{info.github}</a></div>
    <div className="hidden">My Email: {info.mail}</div>  
    <div className="hidden">My Linkin: {info.linkin}</div>
    <p className="p hidden">
    I am looking for a job in the fields of system administration,dev ops,network engineering or frontend and backend web development.
    </p>
    <p className="p hidden">
    <div className="hidden">Why onion site? Because i dont have domain nor ssl certificate </div>
    </p>
    <h2 className="hidden">#Technologies I am familiar with</h2>
    <div >
    <ul className="p hidden">
    <li>Java script/Type script</li>
    <ul>
        <li>NodeJS</li> 
        <ul>
            <li>ExpressJS</li>
            <li>GraphQL</li>
            <li>WebSockets</li>
            <li>Electron</li>
        </ul>
        <li>React</li> 
    </ul>
    <li>C,C++,C#</li>
    <li>Java/Kotlin</li>
    <ul>
        <li>Swing</li>
        <li>JavaFX</li>
        <li>Android native framework</li>
        <li>Spring</li>
    </ul>
    <li>HTML/CSS</li>
    <li>SQL</li>
    <ul>
        <li>Mysql</li>
        <li>SQLite</li>
    </ul>
    <li>Linux</li>
    <ul>
        <li>Vim</li> 
        <li>bash,sh,zsh,fish</li>
        <li>Systemd</li>
    </ul>

    <li>Networking</li>
                <ul>
                    <li>HTTP</li>
                    <li>FTP</li>
                    <li>IMAP</li>
                    <li>SMTP</li>
                    <li>POP3</li>
                    <li>TELNET</li>
                    <li>SSL/TLS</li>
                    <ul>
                        <li>HTTPS</li> 
                        <li>SMTPS</li>
                        <li>IMAPS</li>
                        <li>POP3S</li>
                    </ul>
                    <li>SSH</li>
                    <ul>
                        <li>FTPS</li>
                    </ul>
                    <li>DNS</li>
                    <li>DHCP</li> 
                </ul>
  
    <li>Website testing</li>
    <ul>
        <li>Selenium</li> 
    </ul>

    </ul>
    </div>

  

    <h1 className="hidden">#Linux</h1>
    <h2 className="hidden">Distros that i am used to</h2> 
    <ul className="p hidden">
        <li>Ubuntu</li>
        <li>Debian</li>
        <li>Arch</li>
        <li>Void</li>
        <li>But i will manage in any unix ,unix-like or unix based OS</li>
    </ul>
    <li className="hidden">I am confident with shells (bash,zsh,fish...) and console based programs like (LVM,Systemd,vim,...)</li>
    <br></br>
     <li className="hidden">My text editor of choice is Vim ,<a href="https://github.com/joca069/dot-files">my dot files</a></li>
     
    	 

	<h2 className="hidden">Networking</h2>
	<p className="hidden"> 
    My knowledge of this domain is primarily theoretical and originates from <a href="https://www.netacad.com/courses/packet-tracer">Cisco Packet Tracer</a><br></br>
    Only real piece of networking hardware I worked with was my home router<br></br>

    </p>
    
    </div>
    </>
)
}
