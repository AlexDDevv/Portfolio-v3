import React from 'react'
import ProjectCarrousel from './ProjectCarrousel'
import TechnoProject from "./TechnoProject"

export default function ProjectDetails({ img, title, presentation, objectif, techno, repo, website, onClick, index, onChange }) {
    return (
        <>
            <section className="project-details">
                <h1>{title}</h1>
                <ProjectCarrousel
                    img={img}
                    title={title}
                    index={index}
                    onChange={onChange}
                />
                <div className="project-text">
                    <p className="project-presentation">{presentation}</p>
                    <p className="project-objectif"><span>Objectif:</span> {objectif}</p>
                </div>
                <div className="stack-project">
                    {techno.map((tech, i) => (
                        <TechnoProject
                            key={i}
                            techno={tech}
                        />
                    ))}
                </div>
                <div className="link-container">
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
