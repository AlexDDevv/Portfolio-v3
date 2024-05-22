import React from 'react'
import dataProjects from "../data/dataProjects.json"
import BentoProjects from '../components/projects/BentoProjects'
import Transition from '../utils/Transition'

const Projects = () => {
    return (
        <main className="main-projects">
            <h1>My projects</h1>
            <section className="projects-container">
                {dataProjects.map(project => (
                    <BentoProjects
                        key={project.id}
                        title={project.title}
                        icon={project.icon}
                        description={project.description}
                        techno={project.techno}
                        cover={project.cover}
                    />
                ))}
            </section>
        </main>
    )
}

export default Transition(Projects)

