import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Forum from "./forum/forum"
import AboutMe from './aboutme/aboutMe';
import Projects from "./projects/projects"

const root = ReactDOM.createRoot(document.getElementById('root'));
async function main(){
root.render(
  <React.StrictMode>
    {await AboutMe()}
  </React.StrictMode>
);
}

main()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
