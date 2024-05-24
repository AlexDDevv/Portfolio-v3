import React, { useState } from 'react'
import dataProjects from "../data/dataProjects.json"
import BentoProjects from '../components/projects/BentoProjects'
import ProjectDetails from '../components/projects/ProjectDetails'
import Transition from '../utils/Transition'

const Projects = () => {
    const [showDetails, setShowDetails] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)
    const [sliderIndex, setSliderIndex] = useState(0)

    const renderDetails = (project) => {
        setSelectedProject(project)
        setShowDetails(!showDetails)
        window.scrollTo(0, 0)
    }

    const goBack = () => {
        setShowDetails(false)
        setSelectedProject(null)
    }

    const handleRadio = (radioIdx) => {
        setSliderIndex(radioIdx)
    }

    return (
        <main className="main-projects">
            {!selectedProject ? (
                <>
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
                </>
            ) : (
                <ProjectDetails
                    img={selectedProject.images}
                    title={selectedProject.title}
                    index={sliderIndex}
                    presentation={selectedProject.presentation}
                    objectif={selectedProject.objectif}
                    techno={selectedProject.techno}
                    repo={selectedProject.repo}
                    website={selectedProject.website}
                    onClick={goBack}
                    radioIdx={sliderIndex}
                    onChange={handleRadio}
                />
            )}
        </main>
    )
}

export default Transition(Projects)

