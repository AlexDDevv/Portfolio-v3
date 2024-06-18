import React from 'react'
import TechnoProject from './TechnoProject'

export default function BentoProjects({ onClick, titleBento, title, icon, description, techno, cover }) {
    return (
        <div className='bento-item project-bento' onClick={onClick}>
            <div className="cover">
                <img src={cover} alt="" />
            </div>
            <div className="text-container">
                <div className="title-project">
                    <h2 className="title">{titleBento}</h2>
                    <img src={icon} alt={`${title} project icon`} />
                </div>
                <div className="wrapper">
                    <div className="description-project">
                        <p className="description">{description}</p>
                    </div>
                    <div className="stack-project">
                        {techno.map((tech, i) => (
                            <TechnoProject
                                key={i}
                                techno={tech}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
