import React from 'react'
import TechnoProject from "./TechnoProject"

export default function ProjectDetails({ cover, title, presentation, objectif, techno, img, repo, website, onClick }) {
    return (
        <>
            <div className="project-cover">
                <img src={cover} alt={`${title} project cover`} />
            </div>
            <section className="project-details">
                <h1 className="project-name">{title}</h1>
                <div className="project-text">
                    <p className="project-presentation">{presentation}</p>
                    <p className="project-objectif">{objectif}</p>
                </div>
                <div className="stack-project">
                    {techno.map((tech, i) => (
                        <TechnoProject
                            key={i}
                            techno={tech}
                        />
                    ))}
                </div>
                <div className="project-carrousel"></div>
                <div className="project-links">
                    <a href={repo} target='_blank' className='project-link'>Github</a>
                    <a href={website} target='_blank' className='project-link'>Site</a>
                </div>
                <div className="arrow-back" onClick={onClick}>
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
            </section>
        </>
    )
}
