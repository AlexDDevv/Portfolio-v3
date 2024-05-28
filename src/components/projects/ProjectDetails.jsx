import React from 'react'
import ProjectCarrousel from './ProjectCarrousel'
import TechnoProject from "./TechnoProject"
import { motion } from 'framer-motion'

export default function ProjectDetails({ img, title, presentation, objectif, techno, repo, website, onClick }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <section className="project-details">
                <h1>{title}</h1>
                <ProjectCarrousel
                    img={img}
                    title={title}
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
                    <span className="fa-solid fa-arrow-left" aria-hidden="true"></span>
                    <span className="sr-only">Flèche de retour en arrière</span>
                </div>
            </section>
        </motion.div>
    )
}
