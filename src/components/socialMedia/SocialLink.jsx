import React from 'react'

export default function SocialLink({ link, title, icon }) {
    return (
        <li className="social-li">
            <a href={link} target='blank' className="social-link">
                <span className={icon} aria-hidden="true"></span>
                <span className="sr-only">Lien vers mon profil {title}</span>
            </a>
        </li>
    )
}