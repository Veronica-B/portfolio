import React from 'react';
import project from '../projects.json';

const ProjectCard = () => {
return(
<div className="container--project">
{project.map((item, index) =>{
return(
    <div className="flexbox--project">
    <a className="border" href={item.link}><img className="img--project" alt="project images" src={item.image}/></a>

   <h3 className="headers--project"> {item.name}</h3>

    <p className="descrip--project">{item.description}</p>

    </div>
)})}
</div>

)

}


export default ProjectCard;