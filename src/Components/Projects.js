import React from 'react';

const Project = ({title, text, button, link}) => {
    return (
        <div className="prjkt">
            <h4>{title}</h4>
            <p className="prjkt-p">{text}
            <br/>
            <br/>
            <a href={link} target="_blank" rel="noopener noreferrer"><button className="prjkt-b">{button}</button></a>
            </p>
        </div>
    )
}

export default Project;
