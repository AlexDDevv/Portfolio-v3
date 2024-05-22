import React from 'react'
import TechnoProject from './TechnoProject'

export default function BentoProjects({ title, icon, description, techno, cover }) {
    return (
        <div className='bento-item project-bento'>
            <div className="card">
                <div className="front-card">
                    <div className="title-project">
                        <h2 className="title">{title}</h2>
                        <img src={icon} alt={`${title} project icon`} />
                    </div>
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
                <div className="back-card">
                    <img src={cover} alt={`${title} project cover`} className='bento-cover' />
                </div>
            </div>
        </div>
    )
}
