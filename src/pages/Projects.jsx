import React, { useState } from 'react'
import dataProjects from "../data/dataProjects.json"
import BentoProjects from '../components/projects/BentoProjects'
import ProjectDetails from '../components/projects/ProjectDetails'
import Transition from '../utils/Transition'
import { motion } from 'framer-motion'

const Projects = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const renderDetails = (project) => {
        setSelectedProject(project)
        setShowDetails(!showDetails)
        window.scrollTo(0, 0)
    }

    const goBack = () => {
        setShowDetails(false)
        setSelectedProject(null)
        window.scrollTo(0, 0)
    }

    return (
        <main className="main-projects">
            {!selectedProject ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <h1>My projects</h1>
                    <section className="projects-container">
                        {dataProjects.map(project => (
                            <BentoProjects
                                key={project.id}
                                onClick={() => renderDetails(project)}
                                title={project.title}
                                icon={project.icon}
                                description={project.description}
                                techno={project.techno}
                                cover={project.cover}
                            />
                        ))}
                    </section>
                </motion.div>
            ) : (
                <ProjectDetails
                    img={selectedProject.images}
                    title={selectedProject.title}
                    presentation={selectedProject.presentation}
                    objectif={selectedProject.objectif}
                    techno={selectedProject.techno}
                    repo={selectedProject.repo}
                    website={selectedProject.website}
                    onClick={goBack}
                />
            )}
        </main>
    )
}

export default Transition(Projects)

