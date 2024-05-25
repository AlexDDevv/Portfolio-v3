import React from 'react'
import { Link } from "react-router-dom"

export default function ({ name, title, subtitle, cover }) {
    return (
        <div className={`bento-item ${name}`}>
            <div className="titles">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
            </div>
            <div className="cover">
                <img src={cover} alt={`Application ${title}`} />
            </div>
            <Link to={"/projects"} className='redirection'>
                <span className="fa-solid fa-square-arrow-up-right" aria-hidden="true"></span>
                <span className="sr-only">Redirection vers la page Projets</span>
            </Link>
        </div>
    )
}
